import { Link } from "react-router-dom";
import Character from "./Character";

function ListCharacters({ allData, loading }) {
  const renderCharacters = allData.map((item, i) => {
    return (
      <article key={i}>
        <Link to={`/character/${item.id}`}>
          <Character allData={item} />
        </Link>
      </article>
    );
  });

  return (
    <section className="cardsContainer">
      {loading ? (
        <div className="progress-loader">
        <div className="progress"></div>
    </div>
      ) : allData.length === 0 ? (
        "Vaya, no se ha encontrado ese personaje, ¡prueba con otro 🪄!"
      ) : (
        renderCharacters
      )}
    </section>
  );
}

export default ListCharacters;
