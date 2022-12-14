import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="fixed bg-indigo-700 text-white py-4 px-8 w-full">
      <div className="flex justify-between">
        
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          
          <ul className="flex justify-end list-none">
            <li className="mr-6">
              <Link
                href="/"
                className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm"
              >
                Posts
              </Link>
            </li>
            {!session && (
              <li className="ml-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("keycloak");
                  }}
                  className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm"
                >
                  Sign In
                </button>
              </li>
            )}
            {session && (
              
              <><li className="ml-6">

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  } }
                  className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm"
                >

                  Sign Out
                </button>
              </li><li  className="ml-6">
                  <Link
                    href="/member"
                    className="px-2 py-1 text-white bg-indigo-800 hover:bg-indigo-600 rounded-sm"
                  >
                    Member-only Posts
                  </Link>
                </li></>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
