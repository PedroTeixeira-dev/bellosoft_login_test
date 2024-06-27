import BackButton from "../../components/backbutton/backbutton"
import { ContainerLogin } from "../../components/container/styled"
import { ContainerForm, ContainerText, ContainerTop } from "./styled"
import leaf from "../../images/leaf.png"

const Login = () => {
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
                <input type="text" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p>Forgot Password</p>
            </ContainerForm>
        </ContainerLogin>
    )
}

export default Login