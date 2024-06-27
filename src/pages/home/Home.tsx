import { Container } from "../../globalStyle"
import { HomeDiv } from "./styled"
import { LinkButton } from "./styled"

const Home = () => {
    return (
        <Container>
        <HomeDiv>
        <h1>What would you like to do ? Chone one option</h1>
        <LinkButton to="/login">Login</LinkButton>
        <LinkButton to='/register'>Register</LinkButton>
        </HomeDiv>
        </Container>
    )
}

export default Home