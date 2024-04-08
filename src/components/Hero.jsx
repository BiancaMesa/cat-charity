import hero from "../images/heroImage.jpg";
import "../scss/components/Hero.scss";

function Hero() {
  return (
    <section className="heroContainer">
        <h1 className="heroContainer__title">Want to save some angels?</h1>
        <img className="heroContainer__heroImage" src={hero}/>
    </section>
  );
}

export default Hero;