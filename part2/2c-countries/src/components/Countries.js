import React from "react";

export default function Countries({ countries }) {
  return countries.map((country) => (
    <p key={country.name.common}>{country.name.common}</p>
  ));
}
