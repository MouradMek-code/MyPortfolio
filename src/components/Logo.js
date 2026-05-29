import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ emoji, name, domaine }) {
  return (
    <div className={styles.logo}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <span>
          {emoji} {name}
        </span>
        <span className={styles.domaine_work}>{domaine}</span>
      </NavLink>
    </div>
  );
}

export default Logo;
