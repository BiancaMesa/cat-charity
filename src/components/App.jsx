import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../scss/App.scss";

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
      </Routes>
    </>
  );
}

export default App;
