import "../scss/components/Main.scss";
import Hero from "./Hero";
import CatsContainer from "./CatsContainer";
import Donations from "./Donations";
import Support from "./Support";

function Main() {
  return (
    <main>
      <Hero />
      <CatsContainer />
      <Donations />
      <Support />
    </main>
  );
}

export default Main;