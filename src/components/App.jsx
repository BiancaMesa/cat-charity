import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../scss/App.scss";
import Contact from "./Contact";
import Transparency from "./Transparency";
import TheStory from "./TheStory";

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
