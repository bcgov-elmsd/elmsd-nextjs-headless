import Link from 'next/link'
import styles from '../styles/Home.module.css'

const CONTENT_API_KEY = process.env.CONTENT_API_KEY
const API_URL = process.env.API_URL


type Post = {
  title: string,
  slug: string,
  excerpt: string
}

async function getPosts() {
  const res = await fetch(
    `${API_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excerpt`
  ).then((res) => res.json())
  console.log(res)
  const posts = res.posts
  
  return posts
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


const Home: React.FC<{posts:Post[]}> = (props) => {
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

export default Home