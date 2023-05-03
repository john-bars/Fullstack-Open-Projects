import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  // const copy = [...persons];

  const addName = (e) => {
    e.preventDefault();
    const name = { name: newName };
    setPersons(persons.concat(name));
    console.log(persons);
    setNewName("");
  };

  const handleChange = (e) => {
    console.log("new name: ", e.target.value);
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
          <p>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
