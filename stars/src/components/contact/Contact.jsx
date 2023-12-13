import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import anima from "../animation/Animation - 1701646190978.json";
import ani from "../animation/Animation - 1701647715515.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqooojy");

  return (
    <div className="main" id="contact-me">

<div className="lotti">

<Lottie
      style={{
        height: "25rem",
        opacity:1,
        transition: "0.8s",
      }}
      animationData={ani}
      loop={true}
    />

</div>


  
    <section className="Contact">
      <article>
        <h1>
          <span className="icon-envelope"></span> Contact me{" "}
        </h1>
        <p>
          Contact me for more information and get notified when <br /> I publish
          something new.
        </p>
      </article>

      <form onSubmit={handleSubmit}>
        <div className="con">
          <label htmlFor="email">Email Address</label>
          <input
            required
            autoComplete="off"
            type="text"
            id="email"
            placeholder="Email Address"
            name="email"
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex">
          <label htmlFor="text">Your message</label>
          <textarea required placeholder="Message" name="message" id="text">
            Message
          </textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
<div className="btn-parent">
        <button type="submit" disabled={state.submitting} className="submit">
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Lottie
            style={{
              height: "5rem",
              opacity: state.succeeded ? 1 : 0,
              transition: "0.8s",
            }}
            animationData={anima}
            loop={false}
          />

          {state.succeeded && (
            <p style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              Your message has been sent successfully
            </p>
          )}
        </div>
      </form>
    </section>
    </div>
  );
};

export default Contact;
