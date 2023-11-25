import "./Contact.css";
const Contact = () => {
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
      <form>
        <label htmlFor="email">Email Address</label>
        <input
          required
          type="email"
          id="email"
          placeholder="Email Address"
        ></input>
        <div className="flex">
          <label htmlFor="text">Your message</label>
          <textarea required placeholder="Message" name="" id="text">
            Message
          </textarea>
        </div>
        <button className="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
