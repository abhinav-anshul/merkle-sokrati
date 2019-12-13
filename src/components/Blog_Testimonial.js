import React from "react";
import "../assets/face.jpg";

class Blog_Testimonial extends React.Component {
  render() {
    return (
      <div className="blog_testimonial_container">
        <div className="blog_container">
          <div className="blog-heading">blog post</div>
          <div>
            <img
              className="gallery_image"
              src={require("../assets/gallery/3.jpg")}
            />
          </div>
          <div className="gallery_content">Some Details about this image</div>
        </div>
        <div className="testimonial_container">
          <div className="testimonial-heading">testimonial</div>
          <div className="comment_container">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </div>
          <div className="profile_container">
            <div className="image_container">
              <img
                className="image-holder"
                src={require("../assets/face.jpg")}
              />
            </div>
            <div className="image-name">John Doe</div>
            <div className="image-degree">Marketing Manager</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog_Testimonial;
