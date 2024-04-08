import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.jpg";
import "../scss/components/CatCard.scss";

function CatCard() {
  return (
    <>
    <section className="cardContainer">
        <h2 className="cardContainer__name">Suki</h2>
        <img className="cardContainer__image" src={cat1} alt="cat1" />
        <p className="cardContainer__description">Description</p>
      </section>
      <section className="cardContainer">
        <h2 className="cardContainer__name">Mística</h2>
        <img className="cardContainer__image" src={cat2} alt="cat2" />
        <p className="cardContainer__description">Description</p>
        </section>
    </>
  );
}

export default CatCard;