import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [filteredNames, setFilteredNames] = useState({});

  const filter = (e) => {
    setFilterInput(e.target.value);
    const match = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value)
    );
    setFilteredNames(match);
  };

  function handleSubmit(e) {
    const match = persons.some((person) => person.name === newName.trim());
    e.preventDefault();
    const newContact = {
      name: newName.trim(),
      number: newNumber,
      id: persons.length + 1,
    };
    match
      ? window.alert(`${newName} is already added to the phonebook.`)
      : setPersons(persons.concat(newContact));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <p>
          filter shown with: <input type="text" onChange={filter} />
        </p>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            name:{" "}
            <input
              type="text"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </p>
          <p>
            number:{" "}
            <input
              type="tel"
              required
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filterInput === ""
          ? persons.map((person) => (
              <p key={person.id}>
                {person.name} {person.number}
              </p>
            ))
          : filteredNames.map((person) => (
              <p key={person.id}>
                {person.name} {person.number}
              </p>
            ))}
      </div>
    </div>
  );
};

export default App;
