import "./navbar.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/userSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const logoutHandler = async () => {
    await apiRequest.post("/auth/logout");
    navigate("/login");
    dispatch(logout());
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
        <Link to="/list">
          <a href="">Agents</a>
        </Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <span>{user.username}</span>
            <Link to="/profile" className="profile">
              {location.pathname === "/profile" ? (
                <button className="logout" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <>
                  <div className="notification">3</div>
                  <img
                    src={user.avatar ? user.avatar : "/default-profile.png"}
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
          <Link to="/list">
            <a href="">Agents</a>
          </Link>
          <Link to="/login">
            <a href="">Login</a>
          </Link>
          <Link to="/register">
            <a href="" className="signup">
              SignUp
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
