import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white py-4 px-8">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex justify-end">
          <li className="mr-6">
            <Link href="/">
              <a className="text-white hover:text-gray-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="text-white hover:text-gray-400">Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;