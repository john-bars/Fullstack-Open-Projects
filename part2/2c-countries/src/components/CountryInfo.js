import React, { useState } from "react";

const CountryList = ({ filteredCountries, show, setShow }) => {
  return filteredCountries.map((country) => (
    <p key={country.cca2}>
      {country.name.common}
      <button onClick={() => setShow(!show)}>show</button>
    </p>
  ));
};

const Info = ({ filteredCountries }) => {
  return filteredCountries.map((country) => (
    <div key={country.cca2}>
      <h2>{country.name.common}</h2>
      {/* capital {country.capital} <br /> */}
      area {country.area} <br />
      <p>
        <strong>languages: </strong>
      </p>
      <ul>
        {Object.keys(country.languages).map((lang) => (
          <li key={lang}>{country.languages[lang]}</li>
        ))}
      </ul>
      <img alt={country.flags.alt} src={country.flags.png} />
      <h2>Weather in {country.capital}</h2>
      temperature
    </div>
  ));
};

export default function CountryInfo({ filteredCountries }) {
  const [show, setShow] = useState(false);
  if (!filteredCountries) {
    return;
  }

  return filteredCountries.length > 10 ? (
    <p>too many match, specify another filter</p>
  ) : filteredCountries.length < 1 ? (
    <Info filteredCountries={filteredCountries} />
  ) : show ? (
    <Info filteredCountries={filteredCountries} />
  ) : (
    <CountryList
      filteredCountries={filteredCountries}
      show={show}
      setShow={setShow}
    />
  );
}
