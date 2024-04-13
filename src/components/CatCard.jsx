//import cat1 from "../images/cat1.jpg";
//import cat2 from "../images/cat2.jpg";
import angelina from "../images/angelina.jpeg";
import sirena from "../images/sirena2.jpeg";
import suki from "../images/suki2.jpeg";
import lemonade from "../images/lemonade2.jpeg";
import flower1 from "../images/cherry-blossom.png";
import flower2 from "../images/flower-pot.png";
 import flower3 from "../images/sakura.png";
import "../scss/components/CatCard.scss";

function CatCard() {
  return (
    <>
     <section className="cardContainer">
        <div className="cardContainer__container1"> 
            <img className="cardContainer__container1--image" src={sirena} alt="cat2" />
        </div>
        <div className="cardContainer__container2">
            <h2 className="cardContainer__container1--name">Sirena <i className="catNameHeart fa-solid fa-heart"></i>  </h2>
            {/* <h2 className="cardContainer__container1--name">Sirena   <img className="flower" src={flower3} alt="flower" /></h2> */}
            {/* <p className="cardContainer__details"><strong>Sex:</strong> female ♀️</p> */}

            <div className="categoryGroup">
            <span className="cardContainer__container2--detailsCategory">Sex:</span>
            <p className="cardContainer__details"> female ♀️</p>
           

            </div>
            
            <div className="categoryGroup">
            <span className="cardContainer__container2--detailsCategory">Neutered:</span> <p>no</p>
            </div>
            

            <div className="categoryGroup">
            <span className="cardContainer__container2--detailsCategory">Age:</span> <p>3 years aprox.</p>

            </div>
           

          <div className="categoryGroup">
          <span className="cardContainer__container2--detailsCategory">Health situation : </span> <p>calicivirus but under control. Besides that she looks super healthy</p>
          </div>
           
          <div className="categoryGroup">
          <span className="cardContainer__container2--detailsCategory">Lives in:</span> <p>garden station</p>
          </div>
           
   
           <div className="categoryGroup">
           <span className="cardContainer__container2--detailsCategory">Superpower: </span> <p> her sweetness</p>
           </div>

            
       
            <div className="categoryGroup">
            <span className="cardContainer__container2--detailsCategory"> </span>You will fall in love with <p> her cute way of being. </p>
            </div>
            

d           <div className="categoryGroup">
          <span className="cardContainer__container2--detailsCategory">Description: </span> <p>Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches </p>
          </div>
            
        </div>
        {/* <img className="flower" src={flower3} alt="flower" /> */}
      </section>

    

      <section className="cardContainer">
        <div className="cardContainer__container1">
            <img className="cardContainer__container1--image" src={angelina} alt="cat2" />
        </div>
        <div className="cardContainer__container2">
           <h2 className="cardContainer__container1--name">Angelina <img className="flower" src={flower3} alt="flower" /></h2>
            <p className="cardContainer__details"><strong>Sex:</strong> female</p>
            <p className="cardContainer__details"><strong>Neutered:</strong> no</p>
            <p className="cardContainer__details"><strong>Age:</strong> 3 years aprox.</p>
            <p className="cardContainer__details"><strong>Health situation: </strong>Calicivirus but under control. Besides that she looks super healthy</p>
            <p className="cardContainer__details"><strong>Lives in:</strong> garden station</p>
            <p className="cardContainer__details"><strong>Superpower:</strong> her sweetness</p>
            <p className="cardContainer__details"><strong>You will fall in love with</strong> her cute way of being. </p>
            <p className="cardContainer__details"><strong>Description:</strong> Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches </p>
        </div>
        {/* <img className="flower" src={flower3} alt="flower" /> */}
      </section>
      
      <section className="cardContainer">
        <div className="cardContainer__container1">
            <img className="cardContainer__container1--image" src={lemonade} alt="cat2" />
        </div>
        <div className="cardContainer__container2">
            <h2 className="cardContainer__container1--name">Lemonade  <img className="flower" src={flower3} alt="flower" /></h2>
            <p className="cardContainer__details"><strong>Sex:</strong> female</p>
            <p className="cardContainer__details"><strong>Neutered:</strong> no</p>
            <p className="cardContainer__details"><strong>Age:</strong> 3 years aprox.</p>
            <p className="cardContainer__details"><strong>Health situation: </strong>Calicivirus but under control. Besides that she looks super healthy</p>
            <p className="cardContainer__details"><strong>Lives in:</strong> garden station</p>
            <p className="cardContainer__details"><strong>Superpower:</strong> her sweetness</p>
            <p className="cardContainer__details"><strong>You will fall in love with</strong> her cute way of being. </p>
            <p className="cardContainer__details"><strong>Description:</strong> Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches </p>
        </div>
        {/* <img className="flower" src={flower3} alt="flower" /> */}
      </section>
      

      {/* <section>
        <h2 className="cardContainer__name">Suki</h2>
        <img className="cardContainer__image" src={cat1} alt="cat1" />
        <p className="cardContainer__sex">Sex</p>
        <p className="cardContainer__neutered">Neutered</p>
        <p className="cardContainer__age">Age</p>
        <p className="cardContainer__health">Health situation</p>
        <p className="cardContainer__residence">Lives in</p>
        <p className="cardContainer__superpower">Superpower</p>
        <p className="cardContainer__fallFor">You will fall in love with her/his ...</p>
        <p className="cardContainer__description">Description</p>
      </section>
      
      <section className="cardContainer">
        <h2 className="cardContainer__name">Mística</h2>
        <img className="cardContainer__image" src={cat2} alt="cat2" />
        <p className="cardContainer__sex">Sex</p>
        <p className="cardContainer__neutered">Neutered</p>
        <p className="cardContainer__age">Age</p>
        <p className="cardContainer__health">Health situation</p>
        <p className="cardContainer__residence">Lives in</p>
        <p className="cardContainer__superpower">Superpower</p>
        <p className="cardContainer__fallFor">You will fall in love with her/his ...</p>
        <p className="cardContainer__description">Description</p>
      </section> */}
    </>
  );
}

export default CatCard;
