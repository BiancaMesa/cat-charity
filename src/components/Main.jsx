import "../scss/components/Main.scss";
import Hero from "./Hero";
import CatsContainer from "./CatsContainer";
import Donations from "./Donations";
import Support from "./Support";
import Contact from "./Contact";

function Main() {
  return (
    <main>
      <Hero />
      <CatsContainer />
      <Donations />
      <Support />
      <Contact />
    </main>
  );
}

export default Main;