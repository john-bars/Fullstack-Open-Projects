import { useEffect, useState } from "react";
import phoneBookService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
  });
  const { name, number } = newContact;
  const [filterInput, setFilterInput] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    phoneBookService.getAll().then((initialData) => setPersons(initialData));
  }, []);

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
      phoneBookService
        .create(newContact)
        .then((res) => setPersons(persons.concat(res)));
      setNewContact({ name: "", number: "" });
      // newContact.name = "";
      // newContact.number = "";
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filter} />
      <h3>Add a new</h3>
      <PersonForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={name}
        number={number}
      />
      <h3>Numbers</h3>
      <Persons
        filterInput={filterInput}
        filteredNames={filteredNames}
        persons={persons}
      />
    </div>
  );
};

export default App;
