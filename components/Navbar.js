import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="flex p-4 mx-6 justify-between w-full fixed top-0 left-0 border-b-2 border-b-slate-50">
      <h1>Biobazar</h1>
      <ul className="md:flex space-x-3 hidden ">
        <li>Acasă</li>
        <li>Biobazar</li>
        <li>Despre</li>
        <li>Contact</li>
      </ul>

      <div className="hidden md:flex">
        <Button>Înregistrează-te ca producător</Button>
        <Button variant="outline">Autentificare</Button>
      </div>

      <div className="flex md:hidden">
        <MobileNav />
      </div>

   
    </nav>
  )
}

export default Navbar;
