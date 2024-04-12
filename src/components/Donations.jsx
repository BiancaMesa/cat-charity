import "../scss/components/Donations.scss";

function Donations() {
  return (
    <section className="donationsContainer">
        <h1 className="donationsContainer__title">Donations / Our mission <i className="donationsContainer__title--icon fa-solid fa-hand-holding-heart"></i></h1>
        <p className="donationsContainer__missionDescription">Our mission is to help as many stray cats as possible. Thanks to kind and generous people like you these angels have acess to a higher quality of life.</p>

        <div className="donationsContainer__howToSection">   
            <h2 className="donationsContainer__howToSection--title">What we do</h2>
            <p className="donationsContainer__howToSection--description">Every night we go out to feed the cats and spend some quality time with them/give them the love they need.</p>
        </div>

        
    </section>
  );
}

export default Donations;