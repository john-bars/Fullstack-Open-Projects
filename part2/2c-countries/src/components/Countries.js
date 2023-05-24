import React from "react";

export default function Countries({ countries }) {
  return countries.map((country) => (
    <p key={country.cca2}>{country.name.common}</p>
  ));
}
