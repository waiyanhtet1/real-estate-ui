import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./profile.scss";

const Profile = () => {
  const [isMsgOpen, setIsMsgOpen] = useState(null);
  const [sideChatOpen, setIsSideChatOpen] = useState(null);
  const { currentUser: user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <p>
              Avatar:
              <img
                src={user?.avatar ? user.avatar : "/default-profile.png"}
                alt=""
              />
            </p>

            <p>
              Username: <b>{user?.username}</b>
            </p>
            <p>
              E-mail: <b>{user?.email}</b>
            </p>
          </div>
          <div className="title">
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
            <Link to="/addPost">
              <button>Add New Post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
