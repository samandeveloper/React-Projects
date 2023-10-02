import heroImg from "./assets/hero.svg"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby try-hard cred humblebrag portland gatekeep schlitz, ugh
            bicycle rights blue bottle asymmetrical polaroid neutra fam. Photo
            booth bushwick actually helvetica small batch seitan iceland
            mumblecore man bun chartreuse keytar. Mumblecore lomo tilde jean
            shorts banjo, neutral milk hotel Brooklyn. Ugh marfa same, cronut
            kogi glossier meditation try-hard cardigan.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
