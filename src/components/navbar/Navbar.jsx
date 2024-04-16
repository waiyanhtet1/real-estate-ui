import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser, updateUser } = useContext(AuthContext);

  const logoutHandler = async () => {
    await apiRequest.post("/auth/logout");
    // localStorage.removeItem("user");
    updateUser(null);
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
        <a href="/list">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {location.pathname === "/profile" ? (
                <button className="logout" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <>
                  <div className="notification">3</div>
                  <img
                    src={
                      currentUser.avatar
                        ? currentUser.avatar
                        : "/default-profile.png"
                    }
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
