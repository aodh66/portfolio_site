// import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function NotFound() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="align-items-center mb-6 flex flex-col">
        <h1 className="mb-5 text-5xl font-black">404</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            Sorry, this page doesn't exist.
          </h2>
          <div>
            <Link 
              href={`/`} 
              className="link"
              {...({ href: "/" } as any)} 
            >
              Homepage
            </Link>
          </div>
          <div>
            <Link 
              href={`/blog`} 
              className="link"
              {...({ href: "/blog" } as any)} 
            >
              Blog
            </Link>
          </div>
          <div>
            <Link 
            href={`/contact`} 
            className="link"
            {...({ href: "/contact" } as any)} 
          >
              Contact
            </Link>
          </div>
          <div>
            <Link 
            href={`/portfolio`} 
            className="link"
            {...({ href: "/contact" } as any)} 
          >
              Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
