import './Hero.css';

const Hero = ({
  title = `Let's find your perfect car...`,
  subtitle = 'and make it an actual reality with your phone ',
}) => {
  return (
    <section className="hero-container">
      <div className="hero-title-and-phone">
        <div className="hero-title">
          <h1>{title}</h1>
        </div>
        <div className="phone-image-container">
          <img
            className="phone-image"
            src="src/assets/images/phone with car.png"
            alt={`phone image`}
          ></img>
        </div>
        <p className="image-title">{subtitle}</p>
      </div>

      <div className="hero-image-container">
        <img
          className="hero-image"
          src="src/assets/images/hero.jpg"
          alt={`hero image`}
        ></img>
      </div>
    </section>
  );
};

export default Hero;
