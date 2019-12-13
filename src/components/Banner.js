import React from "react";
import "../assets/banner-wallpaper.jpg";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner_container">
        <div className="image_container">
          <div className="welcome">welcome to</div>
          <div className="mymedia">mymedia.one</div>
          <div className="webdesign">web design agency</div>
          <div className="banner-button-container">
            <button className="button-what">what we do</button>
            <button className="button-enquiry">make an enquiry</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
