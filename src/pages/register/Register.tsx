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

const Register = () => {

    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };

    const validateData = () => {
        if (number.length == 11 && password.length >= 8) {
            alert("Account created successfully")
        }
        else {
            alert("Phone number must be in the format (xx) xxxxx-xxxx and password must be more than 8 characters")
        }
    }



    return (
        <ContainerLogin>
            <ContainerTop>
                <BackButton/>
                <img src={leaf}></img>
            </ContainerTop>
            <ContainerText>
                <h1>Create Account</h1>
                <h2>Enter your information below or continue with social media account</h2>
            </ContainerText>
            <ContainerForm>
                <InputField>
                    <label>Email Address</label>
                    <I.EnvelopeFill color="#8B8B8B" size={24} className="icon"/>
                    <InputS type="text" placeholder="Your email address" />
                </InputField>
                <InputField>
                    <label>Mobile Number</label>
                    <I.PhoneFill color="#8B8B8B" size={24} className="icon"/>
                    <InputS onChange={(e) => setNumber(e.target.value)} type="number" placeholder="Your email address" />
                </InputField>
                <InputField>
                    <label>Password</label>
                    <I.LockFill color="#8B8B8B" size={24} className="icon"/>
                    <I.EyeFill color="#8B8B8B" size={24} onClick={togglePasswordVisibility} className="icon2"/>
                    <InputS onChange={(e) => setPassword(e.target.value)} type={passwordVisible ? "text" : "password"} placeholder="Enter your password" />
                </InputField>
                <MainButton onClick={validateData} >Create Account</MainButton>
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
                <p>Already have an account?
                    <LinkButton to="/login"> Login now </LinkButton>
                </p>
            </ContainerBottom>
        </ContainerLogin>
    )
}


export default Register
