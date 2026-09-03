import Collapse from "../components/Collapse";
import aboutBanner from "../assets/about-banner.png";
import "./About.scss";

function About() {
  return (
    <main>
      <div className="about-banner">
       <img src={aboutBanner} alt="Paysage montagneux" />
     </div>

      <section className="about">
        <Collapse title="Fiabilité">
          Les annonces publiées sur Kasa garantissent une expérience fiable
          pour tous les utilisateurs.
        </Collapse>

        <Collapse title="Respect de l'environnement">
          Kasa s'engage à respecter l'environnement et à proposer des
          logements dans une démarche responsable.
        </Collapse>

        <Collapse title="Service">
          Nos équipes sont disponibles pour accompagner les utilisateurs et
          répondre à leurs besoins.
        </Collapse>

        <Collapse title="Sécurité">
          La sécurité est une priorité chez Kasa. Chaque logement et chaque
          annonce sont présentés avec des informations fiables.
        </Collapse>
      </section>
    </main>
  );
}

export default About;