import { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ promiseCountries }) => {
  const countries = use(promiseCountries);
  const country = countries.countries;
  const [visitedCountries, setvisitedCountries] = useState([]);
  const countryCount = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <p>Country Listed: {country.length} </p>
      <p>Country I have Visited: {visitedCountries.length}</p>
      {/* <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol> */}
      <div className="country-grid">
        {country.map((country) => (
          <Country
            countryCount={countryCount}
            key={country.cca3.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;