
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="bg-[#222] text-white py-4">
    <nav className="flex justify-center gap-8">
      <Link href="/" className="text-white no-underline font-bold">
        Clock
      </Link>
      <Link href="/about" className="text-white no-underline font-bold">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
