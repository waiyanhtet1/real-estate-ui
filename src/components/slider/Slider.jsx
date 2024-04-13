import { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);

  function setDirection(direction) {
    if (direction === "left") {
      if (imgIndex === 0) setImgIndex(images.length - 1);
      else setImgIndex(imgIndex - 1);
    } else {
      if (imgIndex === images.length - 1) setImgIndex(0);
      else setImgIndex(imgIndex + 1);
    }
  }

  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => setDirection("left")}>
            <img src="/arrow.png" alt="arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => setDirection("right")}>
            <img src="/arrow.png" alt="arrow" className="right" />
          </div>
          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImages">
        <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => setImgIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
