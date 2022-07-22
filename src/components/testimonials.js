import React from "react";

function Testimonials() {
  return (
    <div className="testimonials">
      <h3>Testimonials</h3>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <div className="testimonial-header">
            <div className="testimonial-header-left">
              <img
                src="/uzo-picture.jfif"
                alt=""
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-header-right">
              <h4>Uzochukwu Nwaigwe</h4>
              <span>Full-stack Instructor - GOMYCODE</span>
            </div>
          </div>
          <div className="testimonial-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            incidunt qui dolores illum fugiat animi nesciunt commodi nemo
            tenetur iusto error officiis fuga, tempora beatae sapiente modi
            vitae velit omnis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
