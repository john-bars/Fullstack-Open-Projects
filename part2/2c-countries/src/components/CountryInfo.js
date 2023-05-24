import React from "react";

export default function CountryInfo({ filteredCountries }) {
  if (!filteredCountries) {
    return;
  }

  return filteredCountries.length > 10 ? (
    <p>too many match, specify another filter</p>
  ) : filteredCountries.length > 1 ? (
    filteredCountries.map((country) => (
      <p key={country.cca2}>
        {country.name.common}
        <button onClick={() => console.log("clicked")}>show</button>
      </p>
    ))
  ) : (
    filteredCountries.map((country) => (
      <div key={country.cca2}>
        <h2>{country.name.common}</h2>
        capital {country.capital[0]} <br />
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
      </div>
    ))
  );
}
