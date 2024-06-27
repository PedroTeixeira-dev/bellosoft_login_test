import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeDiv = styled.div`
text-align: center;

h1 {
    color: 20130B;
    font-size: 24px;
    font-weight: bold;
}

`

export const LinkButton = styled(Link)`
    text-decoration: none;
    display: inline-block;
    background-color: rgba(188, 131, 99, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    width: 311px;
    height: 55px;
    padding: 20px;
    gap: 18px;
    border-radius: 8px;
    opacity: 0px;
    border: none;
    margin-top: 16px;
    margin-left: 8px;
    cursor: pointer;
`
