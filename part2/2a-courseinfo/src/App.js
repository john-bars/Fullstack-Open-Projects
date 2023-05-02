const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
    <Part part={parts[3]} />
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Total = ({ parts }) => {
  let sumOfExercises = 0;
  const exercisesArray = parts.map((part) => part.exercises);
  console.log(exercisesArray);
  exercisesArray.forEach((num) => {
    sumOfExercises += num;
  });
  console.log("The sum of exercises is: ", sumOfExercises);
  return (
    <p>
      <b>total of {sumOfExercises} exercises</b>
    </p>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
