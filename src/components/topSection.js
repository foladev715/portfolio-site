import React from "react";

function TopSection() {
  return (
    <div className="top-section container-fluid">
      <div className="top-section-left">
        <span>Hello,</span>
        <h3>I'm Folarin Ajayi</h3>
        <h6>A Full-Stack Web Developer</h6>
        <br />
        <button
          type="button"
          className="btn btn-read"
          style={{ backgroundColor: "#43b5f7" }}
        >
          <a href="#about-section">Read More</a>
        </button>
      </div>

      <div className="top-section-right">
        <img src="/profile-picture6.jpg" alt="" className="profile-picture" />
      </div>
    </div>
  );
}

export default TopSection;
