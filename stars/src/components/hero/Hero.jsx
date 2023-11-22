import "./Hero.css";
const Hero = () => {
  return (
    <section>
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
          <div style={{display:'flex', gap:20, }}>
          <div  className="icon-twitter ico"></div>
          <div className="icon-instagram ico"></div>
          <div className="icon-github ico"></div>
          <div className="icon-linkedin ico"></div>
          </div>
        </article>
      </div>

      <div className="Right-section animation">ffgghh</div>
    </section>
  );
};

export default Hero;
