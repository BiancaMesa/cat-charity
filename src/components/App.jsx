import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../scss/App.scss";
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
      </Routes>
    </>
  );
}

export default App;
