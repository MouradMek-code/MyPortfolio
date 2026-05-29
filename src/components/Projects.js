import styles from "./Projects.module.css";

import Navbar from "./NavBar";
import Logo from "./Logo";
import LinkBarCom from "./LinkBarCom";

function Projets() {
  return (
    <>
      {" "}
      (
      <div>
        <Navbar>
          <Logo emoji="🟡" name="Mourad MEKNIOUI" />
          <LinkBarCom />
        </Navbar>
      </div>
      <div className={styles.projectsPage}>
        <div className={styles.projectsContainer}>
          <span className={styles.badge}>MY PROJECTS</span>

          <h1>Projects & Experience</h1>

          <p className={styles.description}>
            Full Stack, React, FastAPI, .NET, QA Automation and Community
            Platforms.
          </p>

          {/* GITHUB PROJECTS */}

          <section className={styles.section}>
            <h2>GitHub Projects</h2>

            <div className={styles.projectsGrid}>
              <div className={styles.card}>
                <h3>PetProjects (.NET)</h3>

                <p>
                  Multiple .NET projects and software engineering experiments
                  using C#, ASP.NET and backend architectures.
                </p>

                <a
                  href="https://github.com/MouradMek-code/MOURADProject/tree/master/PetProject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>

              <div className={styles.card}>
                <h3>React Projects</h3>

                <p>
                  Collection of React applications, reusable UI components, SPA
                  architectures and frontend experiments.
                </p>

                <a
                  href="https://github.com/MouradMek-code/Reactprojects"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>

              <div className={styles.card}>
                <h3>FastAPI Ecommerce</h3>

                <p>
                  Ecommerce backend project using Python FastAPI, REST APIs,
                  authentication and SQL database.
                </p>

                <a
                  href="https://github.com/MouradMek-code/FastApiProject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>

              <div className={styles.card}>
                <h3>Founder Community Services</h3>

                <p>
                  Community platforms helping people recover lost animals and
                  help neighbors through reward systems.
                </p>

                <ul>
                  <li>FindReward.net → Lost animals</li>

                  <li>HelpReward.com → Neighbor help</li>
                </ul>

                <a
                  href="https://helpfindreward.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Platform →
                </a>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}

          <section className={styles.section}>
            <h2>Professional Experience</h2>

            <div className={styles.bigCard}>
              <div className={styles.jobHeader}>
                <h3>ANSYS / SYNOPSYS</h3>

                <span>2020 - Present</span>
              </div>

              <h4>Ingénieur Étude & Développement Full Stack</h4>

              <ul>
                <li>Development of backend APIs with FastAPI and SQLite</li>

                <li>Development of React frontend components</li>

                <li>
                  Automated QA architecture using Playwright, Behave and
                  SpecFlow
                </li>

                <li>Development of gRPC and REST API testing solutions</li>

                <li>
                  Collaboration with Application Engineers and Product Owners
                </li>

                <li>Grafana monitoring and pipeline visualization</li>

                <li>CI/CD implementation with Azure DevOps YAML and Ansible</li>

                <li>Validation of LiDAR, radar and camera functionalities</li>
              </ul>
            </div>

            <div className={styles.bigCard}>
              <div className={styles.jobHeader}>
                <h3>Renault Technocentre</h3>

                <span>2019 - 2020</span>
              </div>

              <h4>Full Stack ADAS Engineer</h4>

              <ul>
                <li>
                  Design of Automatic Emergency Braking (AEB) functionality
                  using ASP.NET
                </li>

                <li>Development of React components</li>

                <li>
                  Test case implementation according to functional requirements
                </li>

                <li>
                  Contribution to continuous integration and non regression
                </li>

                <li>Technical documentation writing</li>
              </ul>
            </div>
          </section>

          {/* CV PROJECTS */}

          <section className={styles.section}>
            <h2>Research & Engineering Projects</h2>

            <div className={styles.bigCard}>
              <h3>OCR & Machine Learning Project</h3>

              <span>Renault Technocentre</span>

              <ul>
                <li>OCR application development</li>

                <li>Requirements analysis tool using Machine Learning</li>

                <li>
                  Usage of Naive Bayes, KNN, Decision Tree, Linear Regression
                  and SVM
                </li>

                <li>NLP generation of standardized testing sheets</li>

                <li>Object-oriented test case generator in C/C++</li>

                <li>Integration with MIL environment</li>
              </ul>
            </div>

            <div className={styles.bigCard}>
              <h3>Industrial Production Monitoring</h3>

              <span>Lear Corporation</span>

              <ul>
                <li>Real-time production chain monitoring application</li>

                <li>VB.NET application for QR code reading and alerts</li>

                <li>Real-time OEE calculation</li>

                <li>Industrial supervision and data management</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      )
    </>
  );
}

export default Projets;
