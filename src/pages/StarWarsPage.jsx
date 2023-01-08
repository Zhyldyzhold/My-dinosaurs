import React from "react";
import Loader from "../components/Loader";
import { starWarsApi } from "../const";

function StarWarsPage() {
  const [wars, setWars] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const getStarWars = () => {
    setIsLoading(true);
    fetch(starWarsApi)
      .then((res) => res.json())
      .then((data) => {
        setWars(data.results);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getStarWars();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Eye color</th>
          </tr>
        </thead>
        <tbody>
          {wars.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.mass}</td>
                <td>{item.hair_color}</td>
                <td>{item.eye_color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StarWarsPage;
