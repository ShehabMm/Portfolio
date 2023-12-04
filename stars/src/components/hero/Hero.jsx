import "./Hero.css";
import Lottie from "lottie-react";
import dev from "../animation/Animation - 1701648553505.json";

const Hero = () => {
  return (
    <section className="sec-1">
      <div className="article-p">
        <img
          className="avatar"
          src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1689319406/yes_glmqyd.png"
          alt=""
        />
        <span className="icon-verified"></span>
        <article>
          <h2>
            Web Developer
            <br /> using the most recent technologies.
          </h2>

          <p>
            I am an expert in HTML, CSS, JS, Reactjs,ReduxToolkit,
            <br /> MUI, Tailwind, Wordpress, Elementor, Woocommerce
          </p>
          <div className="sss" style={{ display: "flex", gap: 20 }}>
            <div className="icon-twitter ico"></div>
            <div className="icon-instagram ico"></div>
            <div className="icon-github ico"></div>
            <div className="icon-linkedin ico"></div>
          </div>
        </article>
      </div>
      <div className="Right-section animation">
        <Lottie
          style={{
            height: "25rem",
            opacity: 1,
            transition: "0.8s",
          }}
          animationData={dev}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
