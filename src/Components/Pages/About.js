import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="containers">
        <div className="flex_container">
          <div className="image"></div>
          <h3>John Doe</h3>
          <h5>CEO & Founder</h5>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <a href="">Message</a>
        </div>
        <div className="flex_container">
          <div className="image"></div>
          <h3>John Doe</h3>
          <h5>CEO & Founder</h5>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <a href="">Message</a>
        </div>
        <div className="flex_container">
          <div className="image"></div>
          <h3>John Doe</h3>
          <h5>CEO & Founder</h5>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <a href="">Message</a>
        </div>
        <div className="flex_container">
          <div className="image"></div>
          <h3>John Doe</h3>
          <h5>CEO & Founder</h5>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
          <a href="">Message</a>
        </div>
      </div>
      <div className="happy_client_container">
        <div className="client">
          <h2>
            14<span className="plus">+</span>
          </h2>
          <br></br>
          <span className="partners">partners</span>
        </div>
        <div className="client">
          <h2>
            2,000<span className="plus">+</span>
          </h2>
          <br></br>
          <span className="partners">Investors</span>
        </div>
        <div className="client">
          <h2>
            100<span className="plus">%</span>
          </h2>
          <br></br>
          <span className="partners">Happy client</span>
        </div>
        <div className="client">
          <h2>
            1,700<span className="plus">+</span>
          </h2>
          <br></br>
          <span className="partners">Meetings</span>
        </div>
      </div>
      <footer>
        <a href="">© Powered by InvestAmerica.</a>
      </footer>
    </>
  );
}

export default About;
