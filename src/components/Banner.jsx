import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/pict.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Swapnil Walhekar</h6>
            <h3>Front End Developer</h3>
            <p>
                  1 Year experience in front-end development with hands-on
              experience in identifying web-based user interactions along with
              designing and implementing highly-responsive user interface
              components. Proficient in translating designs and wireframes into
              highquality code, and writing application interface code via
              Javascript and React JS workflows.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
