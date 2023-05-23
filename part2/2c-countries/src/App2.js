import countriesAPI from "./services/countries";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(null);
  const [filterInput, setFilterInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countriesAPI.getAll().then((res) => setCountries(res));
  }, []);

  useEffect(() => {
    if (!countries) {
      return;
    }
    const filter = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(filterInput.toLowerCase()) ||
        country.name.official.toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilteredCountries(filter);
  }, [filterInput, countries]);

  if (!countries) {
    return;
  }

  return (
    <div>
      <form>
        find countries{" "}
        <input onChange={(e) => setFilterInput(e.target.value)} />
      </form>
      {filterInput === "" ? (
        countries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      ) : filteredCountries.length > 10 ? (
        <p>too many match, specify another filter</p>
      ) : (
        filteredCountries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      )}
    </div>
  );
}

export default App;
