import { useEffect, useState } from "react";
import phoneBookService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [newName, setNewName] = useState({
    name: "",
    number: "",
  });
  const { name, number } = newName; // destructure the newName
  const [filterInput, setFilterInput] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [message, setMessage] = useState({
    success: null,
    error: null,
  });

  useEffect(() => {
    phoneBookService.getAll().then((initialData) => setPersons(initialData));
  }, []);

  useEffect(() => {
    if (!persons) {
      return;
    }
    const match = persons.filter((person) =>
      person.name.toLowerCase().includes(filterInput.toLowerCase())
    );
    setFilteredNames(match);
  }, [persons, filterInput]);

  if (!persons) {
    return;
  }

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
            setMessage({
              ...message,
              success: `Updated ${newContactInput.name}'s number`,
            }),
            setTimeout(() => setMessage(null), 5000)
          )
          .then(setNewName({ name: "", number: "" }))

          .catch(
            setMessage({
              ...message,
              error: `Information of ${newContactInput.name} has already been removed from the server.`,
            }),
            setTimeout(() => setMessage(null), 5000),
            phoneBookService.getAll().then((res) => setPersons(res)),
            setNewName({ name: "", number: "" })
          );
    } else {
      phoneBookService
        .create(newContactInput)
        .then((res) => setPersons(persons.concat(res)))
        .then(
          setMessage({ ...message, success: `Added ${newContactInput.name}` }),
          setTimeout(() => setMessage(null), 5000)
        )
        .then(setNewName({ name: "", number: "" }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
