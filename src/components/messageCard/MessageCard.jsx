import "./messageCard.scss";

const MessageCard = ({ setIsMsgOpen }) => {
  return (
    <div className="messageCard" onClick={() => setIsMsgOpen(true)}>
      <img
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <h5>John Doe</h5>
      <p>Lorem ipsum dolor sit amet consectetur...</p>
    </div>
  );
};

export default MessageCard;
