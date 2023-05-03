import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const match = persons.some((person) => person.name === newName.trim());

  const addName = (e) => {
    e.preventDefault();
    // console.log("match: ", match);
    // console.log("persons: ", persons);
    match
      ? window.alert(`${newName} is already added to the phonebook.`)
      : setPersons(persons.concat({ name: newName.trim() }));
  };

  const handleChange = (e) => {
    // console.log("input: ", e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
