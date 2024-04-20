import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./updateProfile.scss";

const UpdateProfile = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({});
  const [avatar, setAvatar] = useState([]);

  const { currentUser: user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.put(`/users/${user.id}`, {
        ...form,
        avatar: avatar[0],
      });

      updateUser(res.data);

      navigate(-1);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
              />
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
          <UploadWidget
            uwConfig={{
              cloudName: "dyrksreor",
              uploadPreset: "estate",
              multiple: false,
              maxImageFileSize: 4000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
