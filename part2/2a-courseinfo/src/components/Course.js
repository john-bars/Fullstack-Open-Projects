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

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
