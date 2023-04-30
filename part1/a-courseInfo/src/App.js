const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  // console.log(props);
  const content = props.parts.map((part) => (
    <p>
      {" "}
      {part.name} {part.exercises}{" "}
    </p>
  ));
  return content;
};

const Total = (props) => {
  let sum = 0;
  const exercisesArray = props.parts.map((part) => part.exercises);
  // console.log(exercisesArray);
  exercisesArray.forEach((num) => {
    sum += num;
  });
  // console.log(sum);
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
