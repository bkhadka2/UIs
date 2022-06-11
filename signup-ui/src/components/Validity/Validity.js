import Card from "../UI/Card/Card";
import classes from "./Validity.module.css";

const Validity = (props) => {
  return (
    <Card className={classes.cardModifier}>
      <div>
        <ul>
          <li
            className={`${
              !props.isValidPassword.length ? classes.invalid : classes.valid
            }`}
          >
            8 characters long
          </li>
          <li
            className={`${
              !props.isValidPassword.symbol ? classes.invalid : classes.valid
            }`}
          >
            at least 1 symbol
          </li>
          <li
            className={`${
              !props.isValidPassword.number ? classes.invalid : classes.valid
            }`}
          >
            at least 1 number
          </li>
          <li
            className={`${
              !props.isValidPassword.upper ? classes.invalid : classes.valid
            }`}
          >
            at least 1 Upper
          </li>
          <li
            className={`${
              !props.isValidPassword.lower ? classes.invalid : classes.valid
            }`}
          >
            at least 1 lower
          </li>
          <li
            className={`${
              !props.isValidPassword.match ? classes.invalid : classes.valid
            }`}
          >
            password matched
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Validity;
