const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  // console.log(parts);
  const content = parts.map((part) => (
    <p>
      {" "}
      {part.name} {part.exercises}{" "}
    </p>
  ));
  return content;
};

const Total = ({ parts }) => {
  let sum = 0;
  const exercisesArray = parts.map((part) => part.exercises);
  // console.log(exercisesArray);
  exercisesArray.forEach((num) => {
    sum += num;
  });
  // console.log("The sum is: " + sum);
  return <p>Number of exercises: {sum}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
