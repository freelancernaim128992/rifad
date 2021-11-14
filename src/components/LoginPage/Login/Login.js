import React, { useState, useHistory, useLocation, useContext } from 'react';
import './Login.css'
import Navbar from '../../ShareComponents/Navbar/Navbar';
import FooterContainer from '../../ShareComponents/FooterContainer/FooterContainer';
import { UserContext } from '../../../App';
import {auth} from '../firebase.config'

const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const handleBlur = (event) => {
        if(event.target.name === "email"){
            const email = event.target.value
            const newUserInfo = {...loginInfo}
            newUserInfo.email = email;
            setLoginInfo(newUserInfo)
        }
        if(event.target.name === "pass"){
            const pass = event.target.value
            const newUserInfo = {...loginInfo}
            newUserInfo.password = pass;
            setLoginInfo(newUserInfo)
        }
    }
    const handleLogin = () => {
        
    }
    return (
        <>
        <Navbar />
            <section className="login">
                <div className="container">
                    <form className="input-container" onSubmit={handleLogin}>
                        <div className="input">
                            <h2>Login</h2><br/>
                            <input onBlur={handleBlur} name="email" type="text" placeholder="email" /><br/><br/>
                            <input onBlur={handleBlur} type="password" name="pass" id="" placeholder="Password" /><br/><br/>
                            <button type="submit" className="button1">Log in</button>
                        </div>
                    </form>
                    <p className="text-secondary text-center">If you don't have any account? click here <a href="/register"><button className="button2">Register</button></a></p>
                </div>
            </section>
        <FooterContainer />
        </>
    );
};

export default Login;