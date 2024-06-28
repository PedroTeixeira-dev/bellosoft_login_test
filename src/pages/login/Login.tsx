import BackButton from "../../components/backbutton/backbutton"
import { ContainerLogin } from "../../components/container/styled"
import { ContainerBottom, ContainerForm, ContainerText, ContainerTop, InputField, InputS, LinkButton, MainButton } from "./styled"
import leaf from "../../images/leaf.png"
import * as I from 'react-bootstrap-icons'
import { useState } from "react"

import google from "../../images/google.png"
import face from "../../images/face.png"
import apple from "../../images/apple.png"
import twitter from "../../images/twitter.png"

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };

    const loginAction = () => {
        alert("Login realizado com sucesso")
    }


    return (
        <ContainerLogin>
            <ContainerTop>
                <BackButton/>
                <img src={leaf}></img>
            </ContainerTop>
            <ContainerText>
                <h1>Login</h1>
                <h2>Welcome back!</h2>
                <h2>Please login to continue</h2>
            </ContainerText>
            <ContainerForm>
                <InputField>
                <label>Email Address</label>
                <I.EnvelopeFill color="#8B8B8B" size={24} className="icon"/>
                <InputS type="text" placeholder="Your email address" />
                </InputField>
                <InputField>
                <label>Password</label>
                <I.LockFill color="#8B8B8B" size={24} className="icon"/>
                <I.EyeFill color="#8B8B8B" size={24} onClick={togglePasswordVisibility} className="icon2"/>
                <InputS type={passwordVisible ? "text" : "password"} placeholder="Enter your password" />
                </InputField>
                <MainButton onClick={loginAction} >Login</MainButton>
                <p>Forgot Password</p>
            </ContainerForm>
            <ContainerBottom>
                <p>Or Continue with Social Accouts</p>
                <div className="socialcontainer">
                <div className="socialBox">
                    <img src={google} alt="google" />
                </div>
                <div className="socialBox">
                <img src={face} alt="facebook" />
                </div>
                <div className="socialBox">
                <img src={apple} alt="apple" />
                </div>
                <div className="socialBox">
                <img src={twitter} alt="twitter" />
                </div>
                </div>
                <p>Don`t have an account?
                    <LinkButton to="/register"> Create Now </LinkButton>
                </p>

            </ContainerBottom>
        </ContainerLogin>
    )
}


export default Login

