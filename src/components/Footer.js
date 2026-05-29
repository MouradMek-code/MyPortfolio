import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} PORTFOLIO — Created by Mourad Meknioui</p>
    </footer>
  );
}

export default Footer;
