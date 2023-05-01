import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = good / total;
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          // const newGoodValue = good + 1;
          // console.log(
          //   "good value now: ",
          //   newGoodValue,
          //   "previous value is: ",
          //   good
          // );
          setGood(good + 1);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          // const newNeutralValue = neutral + 1;
          // console.log("neutral value now: ", newNeutralValue);
          setNeutral(neutral + 1);
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          // const newBadValue = bad + 1;
          // console.log("bad value now: ", newBadValue);
          setBad(bad + 1);
        }}
        text="bad"
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
