import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import SearchField from "./components/SearchField";
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
      <SearchField setFilterInput={setFilterInput} />
      {filterInput === "" ? (
        <Countries countries={countries} />
      ) : filteredCountries.length > 10 ? (
        <p>too many match, specify another filter</p>
      ) : (
        <CountryInfo filteredCountries={filteredCountries} />
      )}
    </div>
  );
}

export default App;
