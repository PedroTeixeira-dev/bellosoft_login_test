import BackButton from "../../components/backbutton/backbutton"
import { ContainerLogin } from "../../components/container/styled"
import { ContainerForm, ContainerText, ContainerTop, InputField, InputS, MainButton } from "./styled"
import leaf from "../../images/leaf.png"
import * as I from 'react-bootstrap-icons'
import { useState } from "react"

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };


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
                <MainButton>Login</MainButton>
                <p>Forgot Password</p>
            </ContainerForm>
        </ContainerLogin>
    )
}


export default Login

