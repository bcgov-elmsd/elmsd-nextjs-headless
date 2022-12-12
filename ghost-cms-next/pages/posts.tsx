import Link from 'next/link'
import { getPosts } from './lib/ghost'


type Post = {
  title: string,
  slug: string,
  excerpt: string
}



export async function getStaticProps({ params }:any) {
  const res = await getPosts()

  const posts = res
  //nextjs will try to run the getstaticprops at most 1 request every 10 seconds
  return {
    props: { posts },
    revalidate: 10
  }
}


const Posts: React.FC<{posts:Post[]}> = (props) => {
  return (
    <div className=" container text-center">
     <h1>
      Hello this is a content test
     </h1>
     <ul className='list-disc'>
        {props.posts.map((post,index) => (
          <li key={index}>
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
     </ul>
    </div>
  )
}

export default Posts