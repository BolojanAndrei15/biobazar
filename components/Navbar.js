import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="flex bg-white p-4 justify-between  w-full fixed top-0 left-0 border-b-2 border-b-slate-50 z-[9999]">
      <h1 className="items-center flex font-bold text-lg">
        <a href="/">Biobazar</a>
      </h1>
      <ul className="md:flex space-x-3 hidden font-semibold items-center w-[30%] justify-between">
        <li>
          <a href="/">Acasă</a>
        </li>
        <li>
          <a href="/">Biobazar</a>
        </li>
        <li>
          <a href="/">Despre</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <div className="hidden md:flex space-x-2">
        <Button>Înregistrează-te ca producător</Button>
        <Button variant="outline">Autentificare</Button>
      </div>

      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
