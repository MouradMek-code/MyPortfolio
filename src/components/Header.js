import planet from "./planet.svg";
import momo from "./momo.jpg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="App-header">
        <img src={planet} className="App-logo" alt="logo" />
        <span
          style={{
            color: "#000",
          }}
        >
          Time is ticking !!
        </span>
        <div className={styles.container}>
          <img src={momo} className="App-momo" alt="momo" />
          <div className={styles.containerdetails}>
            <h1>Hello</h1>
            <h3>About me</h3>
            <p>
              Ingénieur logiciel fullstack avec une expérience avancée sur
              python (fast api ,django) .net (ASP NET ) et React ( Composants
              sans état / de présentation ,Composants avec état ,Composants
              structurels,gestion des états avec use Reducer pour des contextes
              de Spa,avec utilisation de redux toolkit ). J'ai travaillé dans le
              domaine automobile, le paiement en ligne, sur la conception et le
              développement d'APIs REST, microservices et batchs. Aussi j'ai
              travaillé autant que QA automation autant que freelance et j'ai
              obtenu par ailleurs trois certificats de ISTQB
              (automation/foundation/analyste) À l'aise du code jusqu'au
              déploiement CI /CD ) avec Ansible et au monitoring. J'attache de
              l'importance au code propre, aux tests utiles
            </p>
            <div className={styles.portfolio}>
              <span>
                <NavLink
                  className={styles.cv}
                  to="/cv"
                  style={{ textDecoration: "none" }}
                >
                  CV
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={styles.projects}
                  to="/projects"
                  style={{ textDecoration: "none" }}
                >
                  Projects
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={styles.contact}
                  to="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
