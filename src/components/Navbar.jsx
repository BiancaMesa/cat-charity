import React, { useState } from 'react';
import "../scss/components/Navbar.scss";

// const Navbar = () => {

//     // //to change burger classes 
//     // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
//     // const [menu_class, setMenuClass] = useState("menu hidden");
//     // const [isMenuClicked, setIsMenuClicked] = useState(false);

//     // //toggle burger menu change

//     // const updateMenu = () => {
//     //     setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
//     //     setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
//     //     setIsMenuClicked(!isMenuClicked);
//     // }

//     // const updateMenu = () => {
//     //     if(!isMenuClicked) {
//     //         setBurgerClass("burger-bar clicked")
//     //         setMenuClass("menu visible")

//     //     } else {
//     //         setBurgerClass("burger-bar unclicked")
//     //         setMenuClass("menu hidden")
//     //     }

//     //     setIsMenuClicked(!isMenuClicked)
//     // }

//     return (
//         <div style={{width: '100%', height: '100vh'}}>
//             <nav>
//                 <div className='burger-menu'onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>

//                 </div>
//             </nav>

//             <div className={menu_class}></div>

//         </div>
//     )
// }

// export default Navbar; 



// src/Navbar.js

// import React, { useState } from 'react';
// import './Navbar.css'; // Importamos el archivo CSS

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
