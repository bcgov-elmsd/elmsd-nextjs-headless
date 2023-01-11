import Head from "next/head";
import { Inter } from "@next/font/google";
import axios from "axios";
import { remark } from 'remark';
import html from 'remark-html';

const inter = Inter({ subsets: ["latin"] });

type Props = {
  content: string;
};

export default function Home({ content}: Props) {
  return (
    <>
      <Head>
        <title>Strapi NextJS</title>
        <link rel="icon" href="/bcid-symbol-rev.svg" />
      </Head>
      <main>
        <div className="container">
          <article className="tw-prose" dangerouslySetInnerHTML={{__html:content}}></article>
        </div>
      </main>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const config = {
    headers: { Authorization: `Bearer ${process.env.HOMEPAGE_API_TOKEN}` }
};
  const res = await axios.get(`${process.env.API_URL}/api/homepage`,config)
  .then(async (response) => {
    // console.log(response.data.data)
    const processedContent = await remark()
    .use(html)
    .process(response.data.data.attributes.Content);
    // console.log(processedContent.toString().replace('src="/uploads', 'src="https://elmsd-strapi-dev.apps.silver.devops.gov.bc.ca/uploads'));
    return processedContent.toString().replace('src="/uploads', `src="${process.env.API_URL}/uploads`);
  })
  .catch((error) => {
    console.log(error);
    return error.tostring()
  });
  const post = await res
    return {
      props: {
        content : post! || null,
      },
    }
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

}

