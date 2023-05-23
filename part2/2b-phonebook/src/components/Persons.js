import phoneBookService from "../services/persons";

const Persons = ({
  filterInput,
  filteredNames,
  persons,
  setPersons,
  setMessage,
  message,
}) => {
  const handleDelete = (person) => {
    window.confirm(`Delete ${person.name}?`) &&
      phoneBookService.remove(person.id).catch(
        () =>
          setMessage({
            ...message,
            error: `${person.name} has already been deleted.`,
          }),
        setTimeout(() => setMessage(null), 5000)
      );
    phoneBookService.getAll().then((res) => setPersons(res));
  };

  return (
    <div>
      {filterInput === ""
        ? persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number} {person.id}{" "}
              <button onClick={() => handleDelete(person)}>Delete</button>
            </p>
          ))
        : filteredNames.map((person) => (
            <p key={person.id}>
              {person.name} {person.number} {person.id}{" "}
              <button onClick={() => handleDelete(person)}>Delete</button>
            </p>
          ))}
    </div>
  );
};

export default Persons;
