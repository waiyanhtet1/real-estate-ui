import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Map from "../../components/map/Map";
import Slider from "../../components/slider/Slider";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./singlePage.scss";

const SinglePage = () => {
  const data = useLoaderData();
  const [saved, setSaved] = useState(data.isSaved);

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) navigate("/login");

    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: data.id });
    } catch (error) {
      console.log(error);
    }
  };

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
              <img src={data.user.avatar} alt="" />
              <h4>{data.user.username}</h4>
            </div>
          </div>
          <div
            className="bottom"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.postDetail.desc),
            }}
          ></div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {data.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {data.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>{data.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{data.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{data.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{data.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{data.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{data.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{data.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[data]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{ backgroundColor: saved ? "#fece51" : "#fff" }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Remove Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
