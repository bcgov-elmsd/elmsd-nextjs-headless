import Link from "next/link";
import { getMemberOnlyPosts } from "../../lib/ghost";
import Image from "next/image";

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string;
};

export async function getStaticProps({ params }: any) {
  const res = await getMemberOnlyPosts();

  const posts = res;
  console.log(posts);
  //nextjs will try to run the getstaticprops at most 1 request every 10 seconds
  return {
    props: { posts },
    revalidate: 10,
  };
}

const Member: React.FC<{ posts: Post[] }> = (props) => {
  return (
    <main className="px-8 py-4 bg-white max-w-7xl w-4/5 mx-auto">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-indigo-700">Posts</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Recent Posts
        </h2>

        <ul className="border-b border-indigo-700 pb-4 list-none">
          {props.posts.map((post, index) => (
            <Link
              key={index}
              href="/member/[slug]"
              as={`/member/${post.slug}`}
              legacyBehavior
            >
              <li className="mb-4 border-indigo-700 border-2 shadow-md cursor-pointer rounded-t-lg ">
                <article className="flex">
                  <div className=" w-full">
                    {post.feature_image && (
                      <div className=" relative overflow-hidden w-full h-40">
                      <Image src={post.feature_image} alt="Post 1" className="object-cover" fill/>
                    </div>
                    )
                    }
                    
                    <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                    <p className="text-gray-700 text-sm">{post.excerpt}</p>
                    </div>
                    
                  </div>
                </article>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Member;
