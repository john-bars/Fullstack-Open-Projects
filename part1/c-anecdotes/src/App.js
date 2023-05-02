import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const copy = [...points];
  const topVote = Math.max.apply(null, copy);
  const indexWithMaxValue = copy.indexOf(topVote);
  // console.log(copy);
  // console.log("max = ", max);
  console.log("index: ", copy.indexOf(topVote), "; top vote value: ", topVote);
  console.log("current annecdote index number:", selected);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const vote = () => {
    console.log("previous value", copy);
    copy[selected] += 1;
    setPoints(copy);
    console.log("new value: ", copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>
        has {copy[selected]} {copy[selected] <= 1 ? "vote" : "votes"}
      </p>
      {/* <p>has {copy[selected]} votes</p>  */}
      <Button handleClick={vote} text="vote" />
      <Button
        handleClick={() => setSelected(getRandomInt(8))}
        text="Next Anecdote"
      />
      <h1>Anecdote with most votes</h1>
      {/* <p>{anecdotes[indexWithMaxValue]}</p> */}
      {topVote === 0 ? (
        <p>No vote has been made. Please cast a vote.</p>
      ) : (
        <p>{anecdotes[indexWithMaxValue]}</p>
      )}
    </div>
  );
};

export default App;
