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
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
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
            <h1>My List</h1>
            <Link to="/addPost">
              <button>Add New Post</button>
            </Link>
          </div>

          {/* <div className="listItem">
            {listData.map((list) => (
              <ListCard key={list.id} item={list} />
            ))}
          </div> */}

          <div className="title">
            <h1>Saved List</h1>
          </div>

          {/* {listData.map((list) => (
            <ListCard key={list.id} item={list} />
          ))} */}
        </div>
      </div>
      {/* <div className="chatContainer">
        <div className="wrapper">
          <div className="chatList">
            <h1>Messages</h1>
            <div className="messageList">
              <MessageCard setIsMsgOpen={setIsMsgOpen} />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
            </div>
          </div>

          {isMsgOpen && <Chat setIsMsgOpen={setIsMsgOpen} />}
        </div>
      </div> */}

      {/* <button className="side-button" onClick={() => setIsSideChatOpen(true)}>
        <img src="/chat.png" alt="chat" />
        <span className="noti">3</span>
      </button> */}

      {/* <div
        className={
          sideChatOpen ? "sideChatContainer active" : "sideChatContainer"
        }
      >
        <div className="wrapper">
          <div className="chatList">
            <div className="top">
              <h1>Messages</h1>
              <p className="close" onClick={() => setIsSideChatOpen(false)}>
                X
              </p>
            </div>
            <div className="messageList">
              <MessageCard setIsMsgOpen={setIsMsgOpen} />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
            </div>
          </div>
          {isMsgOpen && <Chat setIsMsgOpen={setIsMsgOpen} />}
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
