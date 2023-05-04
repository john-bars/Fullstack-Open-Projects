import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const match = persons.some((person) => person.name === newName.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewName({ ...newName, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameObject = {
      name: newName.name,
      number: newName.number,
      id: persons.length + 1,
    };
    match
      ? window.alert(`${newName.name} is already added to the phonebook.`)
      : setPersons(persons.concat(newNameObject));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            name: <input type="text" name="name" onChange={handleChange} />
          </p>
          <p>
            number: <input type="tel" name="number" onChange={handleChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
