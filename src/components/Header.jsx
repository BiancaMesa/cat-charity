import "../scss/components/Header.scss";
import ukFlag from "../images/uk_flag.png";


function Header() {
  return (
    <header className="headerContainer">
        <section className="headerContainer__titlesContainer">
            <h1 className="headerContainer__titlesContainer--mainTitle">Gatos de Ogíjares <i className="fa-solid fa-heart"></i> </h1>
            <h2 className="headerContainer__titlesContainer--subtitle">Street angels</h2>
        </section>
        

        <section className="headerContainer__menuContainer">
            <ul className="headerContainer__menuContainer--menu">
              <li className="menuElement menuElementFlag">
                  <img className="menuElementFlag__flag" src={ukFlag} alt="usa-flag"/>
                    English
                  <i className="menuElementFlag__flagArrow fa-solid fa-angle-down"></i>
              </li>
              <li className="menuElement">Meet the cats</li>
              <li className="menuElement">Mission</li>
              <li className="menuElement">Goals</li>
              <li className="menuElement">Support</li>
              <li className="menuElement">Transparency</li>
              <li className="menuElement">Contact</li>
                
            </ul>
        </section>
    </header>
  );
}

export default Header;