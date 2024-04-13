import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData as data, userData } from "../../lib/dummyData";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={data.images} />
          <div className="top">
            <div className="info">
              <h1 className="info-title">{data.title}</h1>
              <div className="info-address">
                <img src="/pin.png" alt="" />
                <span>{data.address}</span>
              </div>
              <div className="info-price">$ {data.price}</div>
            </div>
            <div className="user">
              <img src={userData.img} alt="" />
              <h4>{userData.name}</h4>
            </div>
          </div>
          <div className="bottom">{data.description}</div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">features</div>
      </div>
    </div>
  );
};

export default SinglePage;
