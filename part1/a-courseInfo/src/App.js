const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  const content = props.parts.map((part) => (
    <p>
      {" "}
      {part.name}: {part.exercises}{" "}
    </p>
  ));
  return content;
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
      {/* <Total total={course.parts} /> */}
    </div>
  );
};

export default App;
