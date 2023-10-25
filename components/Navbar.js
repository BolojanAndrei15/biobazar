import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="flex p-2 justify-between">
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
