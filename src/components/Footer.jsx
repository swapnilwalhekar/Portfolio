import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Swapnil.</span>
        <div className="links">
          <a target='_blank' href="https://www.linkedin.com/in/swapnil-walhekar-a1617a209">
            <i className="fab fa-linkedin"></i>
          </a>
          <a target='_blank' href="https://github.com/swapnilwalhekar">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Swapnil
        </p>
      </div>
    </footer>
  );
}

export default Footer;
