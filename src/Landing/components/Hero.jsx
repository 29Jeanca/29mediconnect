import "../styles/Hero.css";
const HeroLanding = () => {
  return (
    <>
      <section className="hero-landing-section">
        <div className="hero-landing-text-izq">
          <h3>Tu salud, en un solo clic</h3>
          <p>
            Agenda citas,consulta con profesionales y lleva tu historial medico
            en linea
          </p>
          <div className="hero-landing-buttons">
            <button>Iniciar sesion</button>
            <button>Registrarme</button>
          </div>
        </div>
        <div className="hero-landing-img-der">
          <img src="src\Landing\imgs\heroImg.png" alt="Hero" />
        </div>
      </section>
    </>
  );
};
export default HeroLanding;
