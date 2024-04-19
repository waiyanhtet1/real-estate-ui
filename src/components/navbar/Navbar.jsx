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
        <Link to="/">
          <p className="logo">
            <img src="/logo.png" alt="logo" />
            <span>RealEstate</span>
          </p>
        </Link>
        <p>Home</p>
        <p>About</p>
        <p>Content</p>
        <Link to="/list">
          <p>Agents</p>
        </Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <span>{user.username}</span>
            <Link to="/profile" className="profile">
              {location.pathname === "/profile" ? (
                <p className="logout" onClick={logoutHandler}>
                  Logout
                </p>
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
              <p className="auth">Login</p>
            </Link>
            <Link to="/register">
              <p className="auth signup">SignUp</p>
            </Link>
          </>
        )}

        <div className="menu-icon" onClick={() => setIsOpen((prev) => !prev)}>
          <img src="/menu.png" alt="menu" />
        </div>
        <div className={isOpen ? "menu active" : "menu"}>
          <p>Home</p>
          <p>About</p>
          <p>Content</p>
          <Link to="/list">
            <p>Agents</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/register">
            <p>SignUp</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
