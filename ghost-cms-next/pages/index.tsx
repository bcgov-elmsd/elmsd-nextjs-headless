import React from 'react';

const Home: React.FC<{}> = () => {
  return (
    <main className="px-8 py-4 bg-white">
      <h1 className="text-3xl font-bold text-indigo-700">
        This is a page for Ghost CMS test APIs
      </h1>
      <p className="text-gray-700 mt-4">
        Ghost CMS is a popular open-source content management system built with Node.js. It is known for its clean and modern design, as well as its powerful API.
      </p>
      <p className="text-gray-700 mt-4">
        This page was built using Next.js, a React-based framework for building server-rendered or statically-exported websites. Next.js makes it easy to create performant and scalable web applications.
      </p>
    </main>
  )
}

export default Home