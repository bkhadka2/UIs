import classes from "./Signup.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState, useEffect } from "react";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasEnoughChar, setHasEnoughChar] = useState();
  const [hasUpper, setHasUpper] = useState();
  const [hasLower, setHasLower] = useState();
  const [hasSymbol, setHasSymbol] = useState();
  const [hasNumber, setHasNumber] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasPasswordMatched, setHasPasswordMatched] = useState();
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    setHasEnoughChar(password.trim().length >= 8);
    setHasUpper(/[A-Z]/.test(password));
    setHasLower(/[a-z]/.test(password));
    setHasSymbol(/[`!@#$%^&*()_+={};':"|,.<>?~]/.test(password));
    setHasNumber(/[0-9]/.test(password));
    setHasPasswordMatched(
      password === confirmPassword &&
        password.length > 0 &&
        confirmPassword.length > 0
    );
    props.onConditionCheck({
      length: hasEnoughChar,
      symbol: hasSymbol,
      upper: hasUpper,
      lower: hasLower,
      number: hasNumber,
      match: hasPasswordMatched,
    });
  }, [
    props,
    password,
    hasEnoughChar,
    hasUpper,
    hasLower,
    hasSymbol,
    hasNumber,
    hasPasswordMatched,
    confirmPassword,
  ]);

  const emailValidity = () => {
    setIsEmailValid(/@.*\..*/.test(email));
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Card>
      <form>
        <div
          className={`${
            isEmailValid === true ? classes.email : classes.invalidEmail
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailInputHandler}
            onBlur={emailValidity}
          />
        </div>
        <div className={classes.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputHandler}
          />
        </div>
        <div className={classes.password}>
          <label htmlFor="repassword">Confirm Password</label>
          <input
            type="password"
            id="repassword"
            onChange={confirmPasswordHandler}
          />
        </div>
        <div>
          <Button>SIGN UP</Button>
        </div>
      </form>
    </Card>
  );
};

export default Signup;
