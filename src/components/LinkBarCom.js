import { NavLink } from "react-router-dom";
import styles from "./LinkBarCom.module.css";
function LinkBarCom() {
  return (
    <div>
      <ul className={styles.link}>
        <span>
          <NavLink
            className={styles.linkspan}
            to="/cv"
            style={{ textDecoration: "none" }}
          >
            Cv |
          </NavLink>
        </span>
        <span>
          <NavLink
            className={styles.linkspan}
            to="/projects"
            style={{ textDecoration: "none" }}
          >
            Projects |
          </NavLink>
        </span>
        <span>
          <NavLink
            className={styles.linkspan}
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            Contact
          </NavLink>
        </span>
      </ul>
    </div>
  );
}

export default LinkBarCom;
