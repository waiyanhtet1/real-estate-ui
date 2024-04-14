import "./profile.scss";
import { listData } from "../../lib/dummyData";
import ListCard from "../../components/listCard/ListCard";
import MessageCard from "../../components/messageCard/MessageCard";
import Chat from "../../components/chat/Chat";
import { useState } from "react";

const Profile = () => {
  const [isMsgOpen, setIsMsgOpen] = useState(null);
  const [sideChatOpen, setIsSideChatOpen] = useState(null);

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
      </div>

      <button className="side-button" onClick={() => setIsSideChatOpen(true)}>
        <img src="/chat.png" alt="chat" />
        <span className="noti">3</span>
      </button>

      <div
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
