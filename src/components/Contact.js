import styles from "./Contact.module.css";

import Navbar from "./NavBar";
import Logo from "./Logo";
import LinkBarCom from "./LinkBarCom";

function Contact() {
  return (
    <>
      (
      <div>
        <Navbar>
          <Logo emoji="🟡" name="Mourad MEKNIOUI" />
          <LinkBarCom />
        </Navbar>
      </div>
      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <span className={styles.badge}>CONTACT</span>

          <h1>Get In Touch</h1>

          <p className={styles.description}>
            Feel free to contact me for software engineering, freelance
            opportunities or collaboration.
          </p>

          <div className={styles.contactCards}>
            <div className={styles.card}>
              <div className={styles.icon}>✉️</div>

              <h3>Email</h3>

              <p>mourad.meknioui@gmail.com</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>📞</div>

              <h3>Phone</h3>

              <p>+33 6 63 37 69 44</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>📍</div>

              <h3>Location</h3>

              <p>Ile de france, France</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>💼</div>

              <h3>LinkedIn</h3>

              <p>www.linkedin.com/in/mourad-meknioui-030509155</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>💻</div>

              <h3>GitHub</h3>

              <p>https://github.com/MouradMek-code</p>
            </div>
          </div>
        </div>
      </div>
      ){" "}
    </>
  );
}

export default Contact;
