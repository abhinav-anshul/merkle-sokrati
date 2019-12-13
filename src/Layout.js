import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Design from "./components/Design";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Blog_Testimonial from "./components/Blog_Testimonial";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Service />
        <Design />
        <Portfolio />
        <Gallery />
        <Blog_Testimonial />
        <Quote />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Layout;
