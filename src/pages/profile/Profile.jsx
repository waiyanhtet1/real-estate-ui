import "./profile.scss";
import { listData } from "../../lib/dummyData";
import ListCard from "../../components/listCard/ListCard";

const Profile = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <p>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </p>

            <p>
              Username: <b>John Doe</b>
            </p>
            <p>
              E-mail: <b>john@gmail.com</b>
            </p>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>

          <div className="listItem">
            {listData.map((list) => (
              <ListCard key={list.id} item={list} />
            ))}
          </div>

          <div className="title">
            <h1>Saved List</h1>
          </div>

          {listData.map((list) => (
            <ListCard key={list.id} item={list} />
          ))}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">chat</div>
      </div>
    </div>
  );
};

export default Profile;
