import React from "react";
import "../assets/footer-logo/call.png";
import "../assets/footer-logo/email.png";
import "../assets/footer-logo/skyline.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact_container">
        <div className="about_us_container">
          <div className="about_us-heading">About us</div>
          <div className="about_us-content">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </div>
        </div>
        <div className="blog_roll_container">
          <div className="blog_roll-heading">blog roll</div>
          <div className="blog_roll-content">
            <p> FAQ </p>
            <p> terms & condition </p>
            <p> wordpress </p>
            <p> design </p>
            <p> joomla </p>
            <p> magneto </p>
          </div>
        </div>
        <div className="latest_news_container">
          <div className="latest_news-heading">latest news</div>
          <div className="latest_news-content">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <br />
            <p>----------------</p>
            <br />
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution
            </p>
          </div>
        </div>
        <div className="contact_us_container">
          <div className="contact_us-heading">contact us</div>
          <div className="contact_us_main_container">
            <div className="email_container">
              <div>
                <img src={require("../assets/footer-logo/email.png")} />
              </div>
              <div>company@website.com</div>
            </div>
            <div className="phone_container">
              <div>
                <img src={require("../assets/footer-logo/call.png")} />
              </div>
              <div>+01 9845 7321</div>
            </div>
            <div className="address_container">
              <div>
                <img src={require("../assets/footer-logo/skyline.png")} />
              </div>
              <div>Post Street, Hadfield</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
