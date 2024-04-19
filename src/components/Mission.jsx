import "../scss/components/Mission.scss";

function Mission() {
  return (
    <section className="missionContainer">
        <h1 className="missionContainer__title">My mission <i className="missionContainer__title--icon fa-solid fa-hand-holding-heart"></i></h1>
        <p className="missionContainer__missionDescription">My mission is to help as many stray cats as possible. </p>

        <div className="missionContainer__statement">   
            <h2 className="missionContainer__statement--title">The situation in Ogíjares</h2>
            <p className="missionContainer__statement--description">Ogíjares is a town on the outskirts of Granada (Spain). It is the place where I was born and curretly live and it has many many stray cats. This sad reality extends to many other towns and cities of Spain. Some of them live in empty lots and others live in more built-up areas. </p>
            <p>There is no control from part of the city council or any other animal organization operating in Ogíjares, as far as I am aware of. No food is being provided, feeding posts or neutering programs in place. </p>
        </div>

        <div className="missionContainer__statement">   
            <h2 className="missionContainer__statement--title">What I do</h2>
            <p className="missionContainer__statement--description"> 
            Everything started earlier than 2018
            Before 2018 some beautiful cats appeared on my door asking for food 
             I consistently started feeding the cats that came to my door back in 2018 and since then it has expanded to 5 different areas. Every night I prep the food that these cats might need for one day and I go out to feed the cats and spend some quality time with them/give them the love they need. 
             Every night I prep the food that cats from 5 different but nearby areas might need for the day and I set off to feed them. During this time not only do they get the food that are so hungry for but also they receive much love and affection. 
             
             Thanks to kind and generous people like you these angels have acess to a higher quality of life.</p>
        </div>

        
    </section>
  );
}

export default Mission;