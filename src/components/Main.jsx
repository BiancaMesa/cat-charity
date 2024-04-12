import "../scss/components/Main.scss";
import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import CatsContainer from "./CatsContainer";
import Donations from "./Donations";
import Goals from "./Goals";
import Support from "./Support";
import Contact from "./Contact";


function Main() {
  return (
    <main>
      <Hero />
    <Routes>
    <Route path="meet-the-cats" element={
          <CatsContainer />
        } />


    </Routes>
       


      <Donations />
      <Goals />
      <Support />
      <Contact />
    </main>
  );
}

export default Main;
