import React from "react";
import "../assets/gallery/1.jpg";
import "../assets/gallery/2.jpg";
import "../assets/gallery/3.jpg";
import "../assets/gallery/4.jpg";

class Portfolio extends React.Component {
  handleAll = () => {
    console.log("clcik");
    document.getElementById("img1").style.display = "inline-block";
    document.getElementById("img2").style.display = "inline-block";
    document.getElementById("img3").style.display = "inline-block";
    document.getElementById("img4").style.display = "inline-block";
  };

  one = () => {
    console.log("click");
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "inline-block";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "inline-block";
  };

  two = () => {
    console.log("click");
    document.getElementById("img1").style.display = "inline-block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "inline-block";
    document.getElementById("img4").style.display = "inline-block";
  };

  three = () => {
    console.log("click");
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "inline-block";
    document.getElementById("img4").style.display = "inline-block";
  };

  four = () => {
    console.log("click");
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "inline-block";
    document.getElementById("img3").style.display = "inline-block";
    document.getElementById("img4").style.display = "inline-block";
  };

  render() {
    return (
      <div className="portfolio_container">
        <div className="portfolio-heading">Portfolio</div>
        <div className="portfolio-text">
          lorem ipsum is simplly a dummy text and typesetting. it is ever since
          aroung 1500, and a lot more stuff to write here, simplly a dummy text
          and typesetting. it is ever since aroung 1500, and a lot more stuff to
          write here
        </div>
        <div className="button_container">
          <button onClick={this.handleAll}>all</button>
          <button onClick={this.one}>creative design</button>
          <button onClick={this.two}>brand & identity</button>
          <button onClick={this.three}>web publication</button>
          <button onClick={this.four}>motion graphics</button>
        </div>
        <div className="images_container">
          <img
            id="img1"
            style={{ display: "inline-block" }}
            src={require("../assets/gallery/4.jpg")}
          />
          <img
            id="img2"
            style={{ display: "inline-block" }}
            src={require("../assets/gallery/2.jpg")}
          />
          <img
            id="img3"
            style={{ display: "inline-block" }}
            src={require("../assets/gallery/3.jpg")}
          />
          <img
            id="img4"
            style={{ display: "inline-block" }}
            src={require("../assets/gallery/4.jpg")}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
