
import Link from "next/link";
import React from "react";
import "./style.css";

const Header = () => (
  <header className="header">
    <nav className="header-nav">
      <Link href="/" className="header-link">
        Home
      </Link>
      <Link href="/clock" className="header-link">
        Clock
      </Link>
    </nav>
  </header>
);

export default Header;
