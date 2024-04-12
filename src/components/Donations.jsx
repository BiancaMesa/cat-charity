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

        <div className="donationsContainer__goalsSection">
            <h1 className="donationsContainer__goalsSection--title">Goals</h1>

            <div className="donationsContainer__goalsSection--goals">
                <div className="foodMiniSection">
                    <i className="foodMiniSection__icon fa-solid fa-bowl-food"></i>
                    <h3 className="foodMiniSection__title">Better Quality Food</h3>
                    <p className="foodMiniSection__description">Right now we can only afford the cheapest unhealthy food. We strive for food that is more nutrient-dense and healthier, with ingredients that contribute positively to their health.</p>
                </div>
                <div className="spayingMiniSection">
                    <i className="spayingMiniSection__icon fa-solid fa-kit-medical"></i>
                    <h3 className="spayingMiniSection__title">Spaying & neutering</h3>
                    <p className="spayingMiniSection__description">Our goal is to start spaying and neutering the cats little by little to control the number there are.</p>
                </div>
                
                <div className="vetCareMiniSection">
                    <i className="vetCareMiniSection__icon fa-solid fa-user-doctor"></i>
                    <h3 className="vetCareMiniSection__title">Vet care</h3>
                    <p className="vetCareMiniSection__description">Currently there is only one cat, Michaela, that is receiving vet care because of her complex situation. Our hope is one, to be able to offer Michaela better vet care, and secondly, to be able to offer any cat who is in need of medical care, the help they need.</p>
                </div>

                <div className="foreverHomeMiniSection">
                    <i className="foreverHomeMiniSection__icon fa-solid fa-heart"></i>
                    <h3 className="foreverHomeMiniSection__title">Forever home</h3>
                    <p className="foreverHomeMiniSection__description">Currently there is only one cat, Michaela, that is receiving vet care because of her complex situation. Our hope is one, to be able to offer Michaela better vet care, and secondly, to be able to offer any cat who is in need of medical care, the help they need.</p>
                </div>

                <div className="fosterMiniSection">
                    <i className="fosterMiniSection__icon fa-solid fa-house"></i>
                    <h3 className="fosterMiniSection__title">Foster</h3>
                    <p className="fosterMiniSection__description">Currently there is only one cat, Michaela, that is receiving vet care because of her complex situation. Our hope is one, to be able to offer Michaela better vet care, and secondly, to be able to offer any cat who is in need of medical care, the help they need.</p>
                </div>
            </div>
            
            
        </div>
        

        
    </section>
  );
}

export default Donations;