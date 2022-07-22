import React from "react";

function AboutComponent() {
  return (
    <div className="about-container container-fluid" id="about-section">
      <img src="/profile-picture6.jpg" alt="" className="about-image" />
      <div className="text-block">
        <h3>About Me</h3>
        <p>
          Hello, I am Folarin Ajayi, a software developer from Lagos, Nigeria.
        </p>
        <p>
          I am proficient in front-end and back-end web development and have
          successfully built dynamic and user-friendly websites and applications
          using technologies such as HTML, CSS, Bootstrap, Vanilla Javascript,
          React.js, Node.js and MongoDB.
        </p>
        <button
          type="button"
          className="btn btn-read"
          style={{ backgroundColor: "#43b5f7" }}
        >
          <a
            href="/Akinfolarin Resume- 2022.pdf"
            download="Akinfolarin Resume- 2022.pdf"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default AboutComponent;
