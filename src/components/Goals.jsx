import "../scss/components/Goals.scss";

function Goals() {
  return (
    <div className="goalsContainer">
    <h1 className="goalsContainer__title">Goals</h1>

    <div className="goalsContainer__goals">
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
            <p className="foreverHomeMiniSection__description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches.</p>
        </div>

        <div className="fosterMiniSection">
            <i className="fosterMiniSection__icon fa-solid fa-house"></i>
            <h3 className="fosterMiniSection__title">Foster</h3>
            <p className="fosterMiniSection__description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches.</p>
        </div>
    </div>
    
    
</div>
  );
}

export default Goals;