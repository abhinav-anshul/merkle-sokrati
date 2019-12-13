import React from "react";

class Design extends React.Component {
  creativeDesign = () => {
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("common-button1").style.backgroundColor =
      " #bf2152";
    document.getElementById("common-button2").style.backgroundColor = " #fff";
    document.getElementById("common-button3").style.backgroundColor = " #fff";
    document.getElementById("common-button4").style.backgroundColor = " #fff";
  };

  handleBrandIdentity = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("common-button1").style.backgroundColor = " #fff";
    document.getElementById("common-button2").style.backgroundColor =
      " #bf2152";
    document.getElementById("common-button3").style.backgroundColor = " #fff";
    document.getElementById("common-button4").style.backgroundColor = " #fff";
  };

  webPublications = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
    document.getElementById("4").style.display = "none";
    document.getElementById("common-button1").style.backgroundColor = " #fff";
    document.getElementById("common-button2").style.backgroundColor = " #fff";
    document.getElementById("common-button3").style.backgroundColor =
      " #bf2152";
    document.getElementById("common-button4").style.backgroundColor = " #fff";
  };

  motionGraphics = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "block";
    document.getElementById("common-button1").style.backgroundColor = " #fff";
    document.getElementById("common-button2").style.backgroundColor = " #fff";
    document.getElementById("common-button3").style.backgroundColor = " #fff";
    document.getElementById("common-button4").style.backgroundColor =
      " #bf2152";
  };
  render() {
    return (
      <div>
        <div className="button_wrapper">
          <button
            style={{ backgroundColor: "#bf2152" }}
            id="common-button1"
            className="creative_design-button"
            onClick={this.creativeDesign}
          >
            Creative Design
          </button>
          <button
            id="common-button2"
            className="brand_identity-button"
            onClick={this.handleBrandIdentity}
          >
            Brand & Identity
          </button>
          <button
            id="common-button3"
            className="web_publication-button"
            onClick={this.webPublications}
          >
            Web Publications
          </button>
          <button
            id="common-button4"
            className="motion_graphics-button"
            onClick={this.motionGraphics}
          >
            Motion Graphics
          </button>
        </div>
        <div className="common_container" style={{ display: "block" }} id="1">
          <div className="common-heading">Creative Design</div>
          <div className="common-content">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </div>
          <button className="common-button">Have a project?</button>
        </div>
        <div className="common_container" style={{ display: "none" }} id="2">
          <div className="common-heading">Brands & Identity</div>
          <div className="common-content">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </div>
          <button className="common-button">Have a project?</button>
        </div>
        <div className="common_container" style={{ display: "none" }} id="3">
          <div className="common-heading">Web Publications</div>
          <div className="common-content">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </div>
          <button className="common-button">Have a project?</button>
        </div>
        <div className="common_container" style={{ display: "none" }} id="4">
          <div className="common-heading">Motion Graphics</div>
          <div className="common-content">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
          </div>
          <button className="common-button">Have a project?</button>
        </div>
      </div>
    );
  }
}

export default Design;
