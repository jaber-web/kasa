import { useParams } from "react-router-dom";
import logements from "../../logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "./Logement.scss";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h1>Logement introuvable</h1>;
  }

  return (
    <main>
      <Slideshow pictures={logement.pictures} />

      <div className="logement-info">
        <div className="logement-info__left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-info__right">
          <div className="host">
            <div className="host__name">
              {logement.host.name.split(" ").map((name, index) => (
                <span key={index}>{name}</span>
              ))}
            </div>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= logement.rating ? "active" : ""}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <span key={equipment}>
              {equipment}
              <br />
            </span>
          ))}
        </Collapse>
      </div>
    </main>
  );
}

export default Logement;