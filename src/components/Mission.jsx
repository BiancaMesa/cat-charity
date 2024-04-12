import "../scss/components/Mission.scss";

function Mission() {
  return (
    <section className="missionContainer">
        <h1 className="missionContainer__title">Our mission <i className="missionContainer__title--icon fa-solid fa-hand-holding-heart"></i></h1>
        <p className="missionContainer__missionDescription">Our mission is to help as many stray cats as possible. Thanks to kind and generous people like you these angels have acess to a higher quality of life.</p>

        <div className="missionContainer__howToSection">   
            <h2 className="missionContainer__howToSection--title">The situation in Spain</h2>
            <p className="missionContainer__howToSection--description">Every night we go out to feed the cats and spend some quality time with them/give them the love they need.</p>
        </div>

        <div className="missionContainer__howToSection">   
            <h2 className="missionContainer__howToSection--title">What we do</h2>
            <p className="missionContainer__howToSection--description">Every night we go out to feed the cats and spend some quality time with them/give them the love they need.</p>
        </div>

        
    </section>
  );
}

export default Mission;