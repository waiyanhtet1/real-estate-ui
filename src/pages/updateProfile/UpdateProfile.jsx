import "./updateProfile.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = () => {};

  return (
    <div>
      <div className="profileUpdatePage">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>
            <div className="item">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user.username}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <button>Update</button>
            {error && <span>error</span>}
          </form>
        </div>
        <div className="sideContainer">
          <img
            src={avatar[0] || user.avatar || "/default-profile.png"}
            alt=""
            className="avatar"
          />
          {/* <UploadWidget
            uwConfig={{
              cloudName: "lamadev",
              uploadPreset: "estate",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
