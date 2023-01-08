import React from "react";
import { api } from "../const";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function HomePage() {
  const [pokemons, setPokemons] = React.useState([]);

  const getPokemons = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  };

  React.useEffect(() => {
    getPokemons();
  });

  return (
    <div className="container">
      <h2>Pokemons:</h2>
      <ListGroup>
        {pokemons.map((item) => {
          return (
            <ListGroup.Item key={item.url}>
              <Link
                to={`/pokemon/${
                  item.url.split("/")[item.url.split("/").length - 2]
                }`}
              >
                {item.name}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default HomePage;
