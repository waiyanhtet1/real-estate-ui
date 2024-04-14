import { useState } from "react";
import "./chat.scss";

const Chat = ({ setIsMsgOpen }) => {
  return (
    <div className="chat">
      <div className="top">
        <div className="info">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h5>John Doe</h5>
        </div>
        <div className="close" onClick={() => setIsMsgOpen(null)}>
          X
        </div>
      </div>
      <div className="middle">
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>1 hour ago.</span>
        </div>
      </div>
      <div className="bottom">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
