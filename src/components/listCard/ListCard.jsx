import { Link } from "react-router-dom";
import "./listCard.scss";

const ListCard = ({ item }) => {
  return (
    <div className="listCard">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="image" />
      </Link>
      <div className="contentContainer">
        <h2 className="content-title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="content-address">{item.address}</p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bed-icon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bath-icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save-icon" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
