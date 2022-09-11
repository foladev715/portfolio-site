import React from "react";

function Projects() {
  return (
    <div className="projects" id="project-section">
      <h3>Latest Work</h3>
      <div className="project-list">
        <div className="project-item">
          <a href="https://foladev-movie-app.netlify.app/" target={"_blank"}>
            <figure>
              <img
                src="/movie-app-image.jpg"
                alt=""
                className="project-image"
              />
              <figcaption>
                Movie App <button class="btn">Visit Site</button>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://lusanno-e-commerce-site.netlify.app/"
            target={"_blank"}
          >
            <figure>
              <img
                src="/e-commerce-site-image.jpg"
                alt=""
                className="project-image"
              />
              <figcaption>
                E-Commerce Site <button class="btn">Visit Site</button>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://foladev715.github.io/CSS-Layout-Project-v2/"
            target={"_blank"}
          >
            <figure>
              <img
                src="/docplanner-site-image.jpg"
                alt=""
                className="project-image"
              />
              <figcaption>
                Docplanner Site Clone <button class="btn">Visit Site</button>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
