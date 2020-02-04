import React from "react";
import "./FaceRecognition.sass";

const FaceRecognition = ({ img, box2 }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2" id="parent">
        <img id="inputImage" src={img} alt="" width="500px" height="auto" />
        {box2.map((face, i) => {
          return (
            <div
              key={i}
              className="bounding-box"
              style={{
                top: face.top,
                left: face.left,
                right: face.right,
                bottom: face.bottom
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
