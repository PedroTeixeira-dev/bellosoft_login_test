import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Tenor Sans", sans-serif;
}
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 20% auto;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 24px 1px;
    border-radius: 8px;
    padding: 8px;
`
