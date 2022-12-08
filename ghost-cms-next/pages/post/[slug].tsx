import Link from "next/link";
import { useRouter } from "next/router";

const CONTENT_API_KEY = process.env.CONTENT_API_KEY
const API_URL = process.env.API_URL

type Post = {
  title: string,
  slug: string,
  html: string
}

async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${API_URL}/ghost/api/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;
    console.log(posts[0])
  return posts[0];
}

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
    revalidate: 10,
  };
}

//on first request Ghost CMS will be called to get all slugs
//during subsequent requests the slug will be saved to local file system and no long load
export const getStaticPaths = async () => {
  //paths -> slugs which are allowed
  //fallback -> if something is not allowed by default then try to fire getStaticProps by default
  //if not successful then return 404
  return{
    paths:[],
    fallback:true
  }
}

const Post: React.FC<{post:Post}> = (props) => {

  const router = useRouter()
  const {post} = props


  //server is executing getStaticProps and client is waiting for that to finish
  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  console.log(props)
  return (
    <div>
      <Link href="/" className="text-center">
      <button className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back
      </button>
      </Link>
      <h1>Post</h1>
      {/* reason why dangerously set html is because it will be used by attackewrs but since
      it is owned by us on the Ghost backend, it should be fine. */}
      <div dangerouslySetInnerHTML={{ __html: post.html}}>
      </div>
    </div>
  );
};

export default Post;
