import { Button } from "react-bootstrap";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../const";

function InfoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = React.useState(null);

  const getInfo = () => {
    fetch(`${api}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  };
  React.useEffect(() => {
    getInfo();
  }, []);

  if (!pokemon) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <h2>Pokemon: {pokemon.name}</h2>
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_shiny} alt="" />
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <span>Height:</span>
          <span>{pokemon.height}</span>
        </li>

        <li className="list-group-item">
          <span>Weight:</span>
          <span>{pokemon.weight}</span>
        </li>

        <li className="list-group-item">
          <span>Base experience:</span>
          <span>{pokemon.base_experience}</span>
        </li>
        <li className="list-group-item">
          <span>Order:</span>
          <span>{pokemon.order}</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoPage;
