import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Content</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <button>Login</button>
        <button className="signup">SignUp</button>

        <div className="menu-icon" onClick={() => setIsOpen((prev) => !prev)}>
          <img src="/menu.png" alt="menu" />
        </div>
        <div className={isOpen ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Content</a>
          <a href="/">Agents</a>
          <a href="/">Login</a>
          <a href="/">SignUp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
