import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xoqooojy");

  return (
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
        <div>
          <label htmlFor="email" >Email Address</label>
          <input
          required
          autoComplete="off"
            type="text"
            id="email"
            placeholder="Email Address"
            name="email"
          ></input>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
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
        <button type="submit" disabled={state.submitting} className="submit">{state.submitting?'Submitting...':"Submit"}</button>


        {state.succeeded && (<p style={{ fontSize:'18px', marginTop:"1.7rem" }} >Your message has been sent successfully</p>)}
      </form>
    </section>
  );
};

export default Contact;
