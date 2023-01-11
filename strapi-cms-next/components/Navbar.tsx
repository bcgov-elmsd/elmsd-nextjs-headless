/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid d-none d-md-block"
              src="/bcid-logo-rev-en.svg"
              width="177"
              height="44"
              alt="B.C. Government Logo"
            />
            <img
              className="img-fluid d-md-none"
              src="/bcid-symbol-rev.svg"
              width="63"
              height="44"
              alt="B.C. Government Logo"
            />
          </a>
          <div className="navbar-brand">Strapi NextJS</div>
          {session && (
            <div className="navbar-nav ml-auto">
              <div className="nav-item my-auto text-white">
                {" "}
                Welcome {session.user?.name}
              </div>
              <button
                className="btn btn-bcgold my-0 my-sm-0 ml-4"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Logout
              </button>
            </div>
          )}
          {status === "loading" && (
            <div className="navbar-nav ml-auto">
              <div className="nav-item my-auto "> Loading...</div>
            </div>
          )}
          {!session && (
            <div className="navbar-nav ml-auto">
              <div className="nav-item my-auto">
                <button
                  className="btn btn-bcgold my-0 my-sm-0 ml-4"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("keycloak");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary-nav border-0">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item border-right">
                <Link
                  href="/"
                  className={`nav-link ${
                    router.pathname === "/" ? "font-weight-bold active" : ""
                  }`}
                  style={
                    router.pathname === "/"
                      ? { textDecoration: "underline" }
                      : undefined
                  }
                >
                  Strapi NextJS
                </Link>
              </li>

              <li className="nav-item border-right">
                <Link
                  href="/bootstrap"
                  className={`nav-link ${
                    router.pathname === "/bootstrap"
                      ? "font-weight-bold active"
                      : ""
                  }`}
                  style={
                    router.pathname === "/bootstrap"
                      ? { textDecoration: "underline" }
                      : undefined
                  }
                >
                  Bootstrap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
