import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../scss/App.scss";
import Stations from "./Stations";
import Transparency from "./Transparency";
import TheStory from "./TheStory";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />

        <Route path="/contact" element={
          <>
            <Header />
            <Contact/>
            <Footer />
          </>
        }/>

        <Route path="stations" element ={
          <>
            <Header />
            <Stations />
            <Footer />
          </>
        }/>

        <Route path="/transparency" element ={
          <>
            <Header />
            <Transparency />
            <Footer />
          </>
        }/>
        <Route path="the-story" element ={
          <>
            <Header />
            <TheStory />
            <Footer />
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;
