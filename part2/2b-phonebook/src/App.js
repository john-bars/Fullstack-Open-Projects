import { useEffect, useState } from "react";
import phoneBookService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({
    name: "",
    number: "",
  });
  const { name, number } = newName; // destructure the newName
  const [filterInput, setFilterInput] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    phoneBookService.getAll().then((initialData) => setPersons(initialData));
  }, []);

  useEffect(() => {
    const match = persons.filter((person) =>
      person.name.toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilteredNames(match);
  }, [persons, filterInput]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewName({ ...newName, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchItem = persons.find(
      (person) => person.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    const newContactInput = {
      name: name.trim(),
      number: number.trim(),
    };

    if (matchItem) {
      window.confirm(
        `${name.trim()} is already added to the phonebook. Do you want to replace the old number with ${number}?`
      ) &&
        phoneBookService
          .update(matchItem.id, newContactInput)
          .then((res) =>
            setPersons(
              persons.map((person) =>
                person.id !== matchItem.id ? person : res
              )
            )
          )
          .then(
            setSuccessMessage(`Updated ${newContactInput.name}'s number`),
            setTimeout(() => setSuccessMessage(null), 5000)
          )
          .then(setNewName({ name: "", number: "" }));
    } else {
      phoneBookService
        .create(newContactInput)
        .then((res) => setPersons(persons.concat(res)))
        .then(
          setSuccessMessage(`Added ${newContactInput.name}`),
          setTimeout(() => setSuccessMessage(null), 5000)
        )
        .then(setNewName({ name: "", number: "" }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter onChange={(e) => setFilterInput(e.target.value)} />
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
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
