import classes from './Button.module.css';

const Button = (props) => {
    return (<button className={`${classes.button} ${props.className}`} type={props.type || 'button'} disable={props.disable}>
        {props.children}
    </button>);
}

export default Button;