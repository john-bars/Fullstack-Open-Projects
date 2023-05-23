import React from "react";

export default function CountryInfo({ filteredCountries }) {
  return filteredCountries.map((country) => (
    <p key={country.name.common}>
      {country.name.common} {country.name.official}
    </p>
  ));
}
