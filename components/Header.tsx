// import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => {
  return (
    <div className="headerlinks mb-10 flex w-full justify-between border-2 border-transparent border-b-gray-500 p-4">
      <Link
        activeClassName="active"
        href="/"
        className="link homelink text-lg font-bold justify-self-start"
        {...({ href: "/" } as any)} 
      >
        Aidan Meehan
      </Link>
      {/* <a href={`/`} className="hidden justify-self-center sm:block">
        Logo
      </a> */}
      {/* <a href={`/`} class="justify-self-center" ><img src={Logo} class="logo" alt="aidan's logo" /></a> */}
      <div className="flex gap-4">
        <Link
          activeClassName="active"
          href="/blog"
          className="link text-lg font-bold justify-self-end"
          {...({ href: "/blog" } as any)} 
        >
          Blog
        </Link>
        <Link
          activeClassName="active"
          href={`/contact`}
          className="link text-lg font-bold justify-self-end"
          {...({ href: "/contact" } as any)} 
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
