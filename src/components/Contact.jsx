import "../scss/components/Contact.scss";

function Contact() {
  return (
    <section className="contactContainer">
        <h1 className="contactContainer__title">Contact</h1>

        <form className="contactContainer__form">
            <label className="contactContainer__form--label" htmlFor="name">Name</label>
            <input className="contactContainer__form--input" id="name" name="name" type="text" placeholder="Name..."/>
            <label className="contactContainer__form--label" htmlFor="email">Email</label>
            <input className="contactContainer__form--input" id="email" name="email" type="email" placeholder="carol@gmail.com"/>
            <label className="contactContainer__form--label" htmlFor="description">Tell us</label>
            {/* <input className="contactContainer__form--inputDescription" id="description" name="description" type="text" placeholder="Tell us..."/> */}
            <textarea className="contactContainer__form--inputDescription"  rows="5" cols="40" id="description" placeholder="Tell us...">
            </textarea>
            <button className="contactContainer__form--submitButton">Submit</button>
        </form>
    </section>
  );
}

export default Contact;