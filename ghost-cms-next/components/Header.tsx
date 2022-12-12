import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white py-4 px-8">
      <div className="flex justify-between">

  
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        
        <ul className="flex justify-end list-none">
          <li className="mr-6">
            <Link href="/"className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;