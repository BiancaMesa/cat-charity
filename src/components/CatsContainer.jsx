
import CatCard from "./CatCard";
import "../scss/components/CatsContainer.scss";


function CatsContainer() {
  return (


    <section className="catsContainer" id="meet-the-cats">
    <h1 className="catsContainer__title">Meet the cats</h1>
    <h1 className="catsContainer__title2">Are you ready to fall in love?</h1>
    {/* <p className="catsContainer__subtitle">Currently, there are 20 of them.</p> */}

    <section className="catsContainer__allCards">
        <CatCard />
    </section>
    
  </section>

  );
}

export default CatsContainer;