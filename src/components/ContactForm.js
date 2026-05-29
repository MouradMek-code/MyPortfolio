import React from "react";
import styles from "./ContactForm.module.css";
import emailjs from "emailjs-com";
const SERVICE_ID = "service_portfolio_mek";
const TEMPLATE_ID = "template_p0ywmzo";
const PUBLIC_KEY = "iYHdcaV7mgIjvD6sX";
const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      },
    );
    e.target.reset();
  };
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <form class={styles.formContainer} onSubmit={handleOnSubmit}>
        <h2>Send me a message. Let's have a chat!</h2>
        <div class={styles.formElement}>
          <label for="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name.."
            required
          />
        </div>

        <div class={styles.formElement}>
          <label>E-mail</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your email.."
            required
          />
        </div>

        <div class={styles.formElement}>
          <label for="message">Message</label>
          <textarea
            name="message"
            rows="8"
            cols="30"
            placeholder="Your message.."
            required
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
