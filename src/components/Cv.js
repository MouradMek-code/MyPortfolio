import styles from "./Cv.module.css";

import Navbar from "./NavBar";
import Logo from "./Logo";
import LinkBarCom from "./LinkBarCom";

function Cv() {
  return (
    <>
      <Navbar>
        <Logo emoji="🟡" name="Mourad MEKNIOUI" />
        <LinkBarCom />
      </Navbar>

      <div className={styles.cvPage}>
        <div className={styles.cvContainer}>
          {/* PROFILE */}
          <section className={styles.cvSection}>
            <h3>Profil</h3>

            <p>
              Ingénieur logiciel Full Stack spécialisé en React, Python FastAPI,
              ASP.NET et QA Automation.
            </p>

            <p>
              Expérience avancée sur les architectures SPA, Redux Toolkit,
              CI/CD, Azure DevOps, Ansible et monitoring Grafana.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section className={styles.cvSection}>
            <h3>Expériences</h3>

            <div className={styles.card}>
              <div className={styles.jobHeader}>
                <h4>ANSYS / SYNOPSYS — Ingénieur Full Stack</h4>

                <span>2020 - Présent</span>
              </div>

              <ul>
                <li>Développement APIs FastAPI & React</li>

                <li>QA Automation avec Playwright, Behave, SpecFlow</li>

                <li>Déploiement CI/CD avec Azure DevOps et Ansible</li>

                <li>Développement gRPC et REST APIs</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.jobHeader}>
                <h4>Renault Technocentre — Full Stack ADAS</h4>

                <span>2019 - 2020</span>
              </div>

              <ul>
                <li>Développement ASP.NET et React</li>

                <li>Développement système AEB</li>

                <li>Intégration continue et QA</li>
              </ul>
            </div>
          </section>

          {/* SKILLS */}
          <section className={styles.cvSection}>
            <h3>Compétences</h3>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h4>Frontend</h4>

                <p>React, Redux Toolkit, JavaScript, HTML, CSS</p>
              </div>

              <div className={styles.skillCard}>
                <h4>Backend</h4>

                <p>Python, FastAPI, Django, ASP.NET</p>
              </div>

              <div className={styles.skillCard}>
                <h4>QA & DevOps</h4>

                <p>Playwright, CI/CD, Azure DevOps, Ansible</p>
              </div>

              <div className={styles.skillCard}>
                <h4>Database</h4>

                <p>SQL, Oracle, SQLite</p>
              </div>
            </div>
          </section>

          {/* LANGUAGES */}
          <section className={styles.cvSection}>
            <h3>Langues</h3>

            <ul className={styles.languages}>
              <li>🇫🇷 Français — Courant</li>
              <li>🇬🇧 Anglais — TOEIC B2</li>
              <li>🇩🇪 Allemand — Débutant</li>
              <li>🇲🇦 Arabe — Maternelle</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Cv;
