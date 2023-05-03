const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  const courseContent = parts.map((part) => <Part part={part} key={part.id} />);
  return courseContent;
};

const Part = ({ part }) => (
  <p>
    {console.log("course content", part)}
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const exercisesArray = parts.map((part) => part.exercises);
  // console.log("exercise array:", exercisesArray);
  const sumOfExercises = exercisesArray.reduce((total, num) => {
    // console.log(total, num);
    return total + num;
  });
  console.log("sum of exercises: ", sumOfExercises);
  return (
    <p>
      <b>total of {sumOfExercises} exercises</b>
    </p>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  );
};

export default App;
