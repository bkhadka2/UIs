import "./App.css";
import Signup from "./components/Signup/Signup";
import Validity from "./components/Validity/Validity";
import { useState } from "react";

const App = () => {
  const [conditionSatisfied, setConditionSatisfied] = useState([
    {
      length: false,
      symbol: false,
      upper: false,
      lower: false,
      number: false,
      match: false,
    },
  ]);

  const passwordConditionHandler = (condition) => {
    setConditionSatisfied(condition);
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>
      <Signup onConditionCheck={passwordConditionHandler}></Signup>
      <Validity isValidPassword={conditionSatisfied}></Validity>
      <img src={require("./Assets/Images/fluffy1.jpeg")} alt="fluffy pig" />
    </div>
  );
};

export default App;
