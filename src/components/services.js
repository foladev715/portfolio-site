import React from "react";

function Services() {
  return (
    <div className="skills" id="skills-section">
      <div className="skills-header">
        <h3>My Skills</h3>
      </div>
      <div className="skills-container">
        <div className="skills-left">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#43b5f7" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>Front-End Web Development</p>
            <span>90%</span>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>Back-End Web Development</p>
            <span>85%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>HTML</p>
            <span>95%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>CSS</p>
            <span>90%</span>
          </div>
        </div>
        <div className="skills-right">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#43b5f7" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>Vanilla Javascript</p>
            <span>90%</span>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>React.js</p>
            <span>85%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>Node.js</p>
            <span>80%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="skills-bar-info">
            <p>MongoDB</p>
            <span>85%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
