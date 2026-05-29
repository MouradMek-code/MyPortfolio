import styles from "./NavBar.module.css";
function Navbar({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Navbar;
