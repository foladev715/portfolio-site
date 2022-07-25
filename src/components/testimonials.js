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
            I’m writing to recommend Akinfolarin Ajayi for a software developer
            role. Folarin was among the top 3 best graduating students in a 5
            months full-stack web development training organized by Gomycode
            Nigeria. Akinfolarin did an exceptional job on his tasks and
            projects. He is a careful, proactive, self-motivated, and
            intelligent team player. It is also worthy to note that he had the
            2nd most outstanding project presentation on the Project Demo-day
            organized by Gomycode Nigeria. He will definitely be an exceptional
            asset to your organization. Please feel free to contact me at
            uzochukwunwigwe@gmail.com if you have any questions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
