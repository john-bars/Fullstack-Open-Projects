import React from "react";

export default function Persons({ filterInput, filteredNames, persons }) {
  return (
    <div>
      {filterInput === ""
        ? persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number} {person.id}
            </p>
          ))
        : filteredNames.map((person) => (
            <p key={person.id}>
              {person.name} {person.number} {person.id}
            </p>
          ))}
    </div>
  );
}
