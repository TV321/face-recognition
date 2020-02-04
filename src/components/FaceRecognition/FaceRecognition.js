import React from "react";
import "./FaceRecognition.sass";

const FaceRecognition = ({ img, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={img} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
