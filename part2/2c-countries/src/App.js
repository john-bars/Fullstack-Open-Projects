import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import SearchField from "./components/SearchField";
import countriesAPI from "./services/countries";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(null);
  const [filterInput, setFilterInput] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    countriesAPI.getAll().then((res) => setCountries(res));
  }, []);

  useEffect(() => {
    if (!countries || !filterInput) {
      return;
    }
    const filter = countries.filter(
      (country) =>
        country.name.common.toLowerCase().match(filterInput.toLowerCase()) ||
        country.name.official.toLowerCase().match(filterInput.toLowerCase())
    );
    setFilteredCountries(filter);
  }, [filterInput, countries]);

  if (!countries) {
    return;
  }

  return (
    <div>
      <SearchField setFilterInput={setFilterInput} />
      {!filterInput ? (
        <Countries countries={countries} />
      ) : (
        <CountryInfo filteredCountries={filteredCountries} />
      )}
    </div>
  );
}

export default App;
