import React, { useState } from 'react';
import FooterContainer from '../../ShareComponents/FooterContainer/FooterContainer';
import Navbar from '../../ShareComponents/Navbar/Navbar';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css'
import {auth} from '../firebase.config'

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleBlur = (event) => {
        if(event.target.name === "name"){
            const name = event.target.value
            const newUserInfo = {...user}
            newUserInfo.name = name;
            setUser(newUserInfo)
        }
        if(event.target.name === "email"){
            const email = event.target.value
            const newUserInfo = {...user}
            newUserInfo.email = email;
            setUser(newUserInfo)
        }
        if(event.target.name === "pass"){
            const pass = event.target.value
            const newUserInfo = {...user}
            newUserInfo.password = pass;
            setUser(newUserInfo)
        }
    }
    console.log(user);
    const handleRegistration = () => {
        createUserWithEmailAndPassword(auth, user.name,user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
            alert('user has been created successfully.')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
        });
    }
    return (
        <>
        <Navbar />
        <form onSubmit={handleRegistration}>
            <div className="main">
            <h2 className="header">
                Register account form
            </h2><br/>
            <div className="input">
                <h5>Full name</h5>
                <input onBlur={handleBlur} type="text" name="name" placeholder="Name"/><br/><br/>

                <h5>Your email</h5>
                <input onBlur={handleBlur} type="email" name="email" placeholder="email"/><br/><br/>

                <h5>Password</h5>
                <input onBlur={handleBlur} type="password" name="pass"   placeholder="Password"/>
            </div>

                <div className="btnMain">
                <button type="submit" className="button">Register</button>
                </div>

            </div>
            <p className="text-secondary text-center mt-3">If you already registered get <a className="login-link" href="/login">login page</a></p>
        </form>
        <FooterContainer />
        </>
    );
};

export default Register;