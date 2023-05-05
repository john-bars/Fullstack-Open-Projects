import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  console.log(persons.length);
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
  });
  const { name, number } = newContact;
  const [filterInput, setFilterInput] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  const filter = (e) => {
    setFilterInput(e.target.value);
    const match = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value)
    );
    setFilteredNames(match);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = persons.some(
      (person) => person.name === newContact.name.trim()
    );
    if (match) {
      window.alert(`${newContact.name} is already added to the phonebook.`);
    } else {
      setPersons(
        persons.concat({
          name: newContact.name.trim(),
          number: newContact.number.trim(),
          id: persons.length + 1,
        })
      );
      newContact.name = "";
      newContact.number = "";
    }
  };

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
              name="name"
              value={name}
              onChange={handleChange}
            />
          </p>
          <p>
            number:{" "}
            <input
              type="tel"
              required
              name="number"
              value={number}
              onChange={handleChange}
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
                {person.name} {person.number} {person.id}
              </p>
            ))
          : filteredNames.map((person) => (
              <p key={person.id}>
                {person.name} {person.number} {person.id}
              </p>
            ))}
      </div>
    </div>
  );
};

export default App;
