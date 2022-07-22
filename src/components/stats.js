import React from "react";

function Stats() {
  return (
    <div className="stats">
      <div className="stat-container">
        <i className="fa-solid fa-hand-holding-hand"></i>
        <h4>20+</h4>
        <p>Projects Completed</p>
      </div>
      <div className="stat-container">
        <i class="fa-solid fa-person-digging"></i>
        <h4>2000+</h4>
        <p>Hours Worked</p>
      </div>
      <div className="stat-container">
        <i class="fa-solid fa-face-smile"></i>
        <h4>18+</h4>
        <p>Positive Reviews</p>
      </div>
      <div className="stat-container">
        <i class="fa-solid fa-laptop-code"></i>
        <h4>4+</h4>
        <p>Technologies Mastered</p>
      </div>
    </div>
  );
}

export default Stats;
