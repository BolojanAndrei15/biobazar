import React from "react";

function Navbar() {
  return (
    <nav className="flex p-2 justify-between">
      <h1>Biobazar</h1>
      <ul className="flex space-x-3">
        <li>Acasă</li>
        <li>Biobazar</li>
        <li>Despre</li>
        <li>Contact</li>
      </ul>

      <div>
        <Button>Înregistrează-te ca producător</Button>
        <Button>Autentificare</Button>
      </div>
    </nav>
  )
}

export default Navbar;
