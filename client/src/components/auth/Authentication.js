import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./Authentication.module.css"

const Authentication = (props) => {
    const dispatch = useDispatch();
    const emailLoginInputRef = useRef('');
    const passwordLoginInputRef = useRef('');
    const nameRegisterInputRef = useRef('');
    const emailRegisterInputRef = useRef('');
    const numberRegisterInputRef = useRef('');
    const passwordRegisterInputRef = useRef('');
    const confirmPasswordRegisterInputRef = useRef('');


    const loginHandler = async(event) =>{
        event.preventDefault();
        const email = emailLoginInputRef.current.value;
        const password = passwordLoginInputRef.current.value;
        console.log(email,password);
        
        const response = await fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.log(data);
        if(!data.error){
            dispatch(userActions.setToken(data.tokenId));
        }
        else{
            alert(data.error);
        }
    }

    const registerHandler = async(event) => {
        event.preventDefault();
        const name = nameRegisterInputRef.current.value;
        const number = numberRegisterInputRef.current.value; 
        const email = emailRegisterInputRef.current.value;
        const password = passwordRegisterInputRef.current.value;
        const confirmPassword = confirmPasswordRegisterInputRef.current.value;
        if(password!==confirmPassword){
            alert('confirm password does not match');
        }
        
        const response = await fetch('http://localhost:8000/api/register',{
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,
                password,
                name,
                confirmPassword,number
            })
        });
        const data = await response.json();
        if(data.error){
            alert(data.error);
            return ;
        }
        else{
            dispatch(userActions.setToken(data.tokenId));
            alert('Succesfully Registered!!');
        }
    
    }

    const Login = (
        <Card className={classes.container}>
            <div className={classes.title}>
                <h2>Login</h2>
            </div>
            <form onSubmit={loginHandler}>
                <input  ref={emailLoginInputRef} type='email' required placeholder="Email" />
                <input ref={passwordLoginInputRef} type='password' required placeholder="Password" />
                <Button type='submit' className={classes.button}>Login</Button>
            </form>
        </Card>
    );

    const Register = (
        <Card className={classes.container}>
            <div className={classes.title}>
                <h2>Register</h2>
            </div>
            <form onSubmit={registerHandler}>
                <input ref={nameRegisterInputRef} type='name' required placeholder="Full Name" />
                <input ref={emailRegisterInputRef} type='email' required placeholder="Email" />
                <input ref={numberRegisterInputRef} type='number' required placeholder="Phone Number" />
                <input ref={passwordRegisterInputRef} type='password' required placeholder="Password" />
                <input ref={confirmPasswordRegisterInputRef} type='password' required placeholder="Confirm Password" />
                <Button type='submit' className={classes.button}>Register</Button>
            </form>
        </Card>
    )
    
    return (
        <Modal onClose={props.onClose}>
            {props.loginStatus && Login}
            {props.registerStatus && Register}
        </Modal>
    )
}

export default  Authentication;