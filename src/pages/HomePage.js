import planet from "./planet.svg";
import Navbar from "../components/NavBar";
import Logo from "../components/Logo";
import LinkBarCom from "../components/LinkBarCom.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
const EMOJI = "🟡";
const NAME = "Mourad MEKNIOUI";
const DOMAINE = "R&D Engineer – Full Stack Development & Quality Assurance";
function HomePage() {
  return (
    <div className="App">
      <Navbar>
        <Logo emoji={EMOJI} name={NAME} domaine={DOMAINE} />
        <LinkBarCom />
      </Navbar>
      <Header />
      <Footer />
    </div>
  );
}

export default HomePage;
