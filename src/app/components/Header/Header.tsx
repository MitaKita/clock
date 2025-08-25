
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="bg-cyan-900/90 text-white px-8 py-4 shadow-md border-b-2 border-cyan-700">
    <nav className="flex items-center justify-center gap-8">
      <Link href="/" className="text-white font-bold hover:text-blue-400 transition-colors duration-200">
        Clock
      </Link>
      <Link href="/about" className="text-white font-bold hover:text-blue-400 transition-colors duration-200">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
