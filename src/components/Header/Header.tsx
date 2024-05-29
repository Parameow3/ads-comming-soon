import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <>
    <section className="container mx-auto p-4 text-center">
      <Navigation />      
    </section>
      <header className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href={siteurl}
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
