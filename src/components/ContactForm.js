import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import Navbar from "./NavBar";
import Logo from "./Logo";
import LinkBarCom from "./LinkBarCom";

const SERVICE_ID = "service_portfolio_mek";
const TEMPLATE_ID = "template_p0ywmzo";
const PUBLIC_KEY = "iYHdcaV7mgIjvD6sX";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    setSuccessMessage("");
    setErrorMessage("");
    setIsSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);

      setSuccessMessage(
        "✓ Message sent successfully. I'll get back to you as soon as possible.",
      );

      e.target.reset();
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar>
        <Logo emoji="🟡" name="Mourad MEKNIOUI" />
        <LinkBarCom />
      </Navbar>
      <section className={styles.contactSection}>
        {/* Left Side */}
        <div className={styles.contactInfo}>
          <span className={styles.badge}>Available for opportunities</span>

          <h1>Let's Build Something Amazing</h1>

          <p>
            Looking for a Frontend, Backend, or Full-Stack Engineer? I'd love to
            hear about your project, team, or opportunity.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h4>⚡ Response Time</h4>
              <p>Usually within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <h4>💼 Open To</h4>
              <p>Remote • Contract • Full-Time</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form className={styles.formContainer} onSubmit={handleOnSubmit}>
          <h2>Contact Me</h2>

          <div className={styles.formElement}>
            <label htmlFor="from_name">Name</label>

            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="John Smith"
              required
            />
          </div>

          <div className={styles.formElement}>
            <label htmlFor="from_email">Email</label>

            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="john@company.com"
              required
            />
          </div>

          <div className={styles.formElement}>
            <label htmlFor="company">Company</label>

            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company name"
            />
          </div>

          <div className={styles.formElement}>
            <label htmlFor="project_type">What can I help you with?</label>

            <select
              className={styles.select}
              id="project_type"
              name="project_type"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>

              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Full-Stack Development</option>
              <option>DevOps / CI/CD</option>
              <option>Technical Consulting</option>
              <option>Freelance Project</option>
              <option>Job Opportunity</option>
            </select>
          </div>

          <div className={styles.formElement}>
            <label htmlFor="message">Description</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className={styles.formButton}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
