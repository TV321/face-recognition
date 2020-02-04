import React from "react";
import "./LinkForm.sass";

const LinkForm = ({ inputChange, buttonClick }) => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your picture. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={inputChange}
            id="input"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-red"
            onClick={buttonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
