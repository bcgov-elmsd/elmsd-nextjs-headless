import Link from "next/link";
import { useRouter } from "next/router";
import { getPostBySlug } from "../lib/ghost";

type Post = {
  title: string;
  slug: string;
  html: string;
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
    revalidate: 10,
  };
};

//on first request Ghost CMS will be called to get all slugs
//during subsequent requests the slug will be saved to local file system and no long load
export const getStaticPaths = async () => {
  //paths -> slugs which are allowed
  //fallback -> if something is not allowed by default then try to fire getStaticProps by default
  //if not successful then return 404
  return {
    paths: [],
    fallback: true,
  };
};

const Post: React.FC<{ post: Post }> = (props) => {
  const router = useRouter();
  const { post } = props;

  //server is executing getStaticProps and client is waiting for that to finish
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  console.log(props);
  return (
    <div className=" bg-slate-300 h-full">
      <article className="mb-4 max-w-7xl w-4/5 mx-auto bg-slate-100 p-7">
        <header className="flex flex-col">
          <Link href="/posts" className="text-center" legacyBehavior>
            <button className=" w-28 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go back
            </button>
          </Link>
          <h3 className="font-bold text-lg mb-2">{post.title}</h3>
          {/* reason why dangerously set html is because it will be used by attackewrs but since
      it is owned by us on the Ghost backend, it should be fine. */}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </header>
      </article>
    </div>
  );
};

export default Post;
