import { useState } from "react";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isUser, setIsUser] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await apiRequest.post("/auth/logout");
    localStorage.removeItem("user");
    navigate("/login");
  };

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
        {isUser ? (
          <div className="user">
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              {location.pathname === "/profile" ? (
                <button className="logout" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <>
                  <div className="notification">3</div>
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </>
              )}
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button className="signup">SignUp</button>
            </Link>
          </>
        )}

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
