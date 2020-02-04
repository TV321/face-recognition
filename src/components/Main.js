import React, { Component } from "react";
import "./Main.sass";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import LinkForm from "../components/LinkForm/LinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "161f750f8b8e42b3981ba72831825b5b"
});

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      entries: 0,
      box: {}
    };
  }

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  onButtonClick = () => {
    this.setState({
      imgUrl: this.state.input
    });

    const one = document.getElementById("input");
    one.value = "";

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log(
          response.rawData.outputs[0].data.regions[0].region_info.bounding_box
        );
        const clarifaiFace =
          response.rawData.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("inputImage");
        const height = Number(image.height);
        const width = Number(image.width);

        const leftCol = clarifaiFace.left_col * width;
        const topRow = clarifaiFace.top_row * height;
        const rightCol = width - clarifaiFace.right_col * width;
        const bottomRow = height - clarifaiFace.bottom_row * height;

        this.setState({
          box: {
            left: leftCol,
            top: topRow,
            right: rightCol,
            bottom: bottomRow
          },
          entries: this.state.entries + 1
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Logo />
        <Rank entries={this.state.entries} />
        <LinkForm
          inputChange={this.onInputChange}
          buttonClick={this.onButtonClick}
        />
        <FaceRecognition img={this.state.imgUrl} box={this.state.box} />
      </div>
    );
  }
}

export default Main;
