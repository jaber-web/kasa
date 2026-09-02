import "./Home.scss";

import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../../logements.json";

function Home() {
  return (
    <main>
      <Banner />

      <section className="logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;