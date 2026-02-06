import React, { useState } from "react";
import "./country.css";
const Country = ({ country, countryCount }) => {
  const { flags, name, region } = country;
  const [visited, setVisited] = useState(false);
  const handleButtonClick = () => {
    setVisited(!visited)
    countryCount(country);
  };
  return (
    <div className={`card ${visited && "visited"}`}>
      <div className="img-wrapper">
        <img src={flags.flags.png} alt="" />
      </div>
      <div>
        <p>{name.common}</p>
        <p>{region.region}</p>
        <button onClick={handleButtonClick}>
          {visited ? "Visited" : "Not Visted"}
        </button>
      </div>
    </div>
  );
};

export default Country;
