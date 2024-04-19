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
     
     {/* Sirena */}
      <section className="cardContainer">
        <div className="cardContainer__container1">
          <img
            className="cardContainer__container1--image"
            src={sirena}
            alt="sirena-pic"
          />
        </div>
        <div className="cardContainer__container2">
          <h2 className="cardContainer__container1--name">
            Sirena <img className="flower" src={flower3} alt="flower" />
          </h2>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Sex:</span> female
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Neutered:</span> no
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Age:</span> Almost 2 years. Born in August 2022.
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Health situation: </span>
            She is in perfect health 
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Lives in: </span> 
            station 1
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Superpower:</span> her
            care, her affection and her aliveness
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">
              You will fall in love with 
            </span> her care, her affection and her aliveness.
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Description:</span> Cat
            purring lap thread dangling curl play hide and seek magic protection
            good energy kitten crystals sleep angels good heart furry babies
            witches{" "}
          </p>
        </div>
      </section>

      {/* Angelina */}
      <section className="cardContainer">
        <div className="cardContainer__container1">
          <img
            className="cardContainer__container1--image"
            src={angelina}
            alt="angelina-pic"
          />
        </div>
        <div className="cardContainer__container2">
          <h2 className="cardContainer__container1--name">
            Angelina <img className="flower" src={flower3} alt="flower" />
          </h2>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Sex:</span> female
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Neutered:</span> no
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Age:</span> 3 years aprox.
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Health situation: </span>
            Calicivirus but under control. Besides that she looks super healthy
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Lives in:</span> garden
            station
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Superpower:</span> her
            sweetness
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">
              You will fall in love with
            </span>{" "}
            her cute way of being.{" "}
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Description:</span> Cat
            purring lap thread dangling curl play hide and seek magic protection
            good energy kitten crystals sleep angels good heart furry babies
            witches{" "}
          </p>
        </div>
      </section>

     {/* Lemonade */}
      <section className="cardContainer">
        <div className="cardContainer__container1">
          <img
            className="cardContainer__container1--image"
            src={lemonade}
            alt="lemonade-pic"
          />
        </div>
        <div className="cardContainer__container2">
          <h2 className="cardContainer__container1--name">
            Lemonade <img className="flower" src={flower3} alt="flower" />
          </h2>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Sex:</span> female
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Neutered:</span> no
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Age:</span> 3 years aprox.
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Health situation: </span>
            Calicivirus but under control. Besides that she looks super healthy
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Lives in:</span> garden
            station
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Superpower:</span> her
            sweetness
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">
              You will fall in love with
            </span>{" "}
            her cute way of being.{" "}
          </p>

          <p className="cardContainer__container2--details">
            <span className="detailsCategoryName">Description:</span> Cat
            purring lap thread dangling curl play hide and seek magic protection
            good energy kitten crystals sleep angels good heart furry babies
            witches{" "}
          </p>
        </div>
      </section>

      

      
    </>
  );
}

export default CatCard;
