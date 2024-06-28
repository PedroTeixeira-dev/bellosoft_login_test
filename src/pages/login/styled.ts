import styled from "styled-components";

export const ContainerTop =  styled.div`
    margin-left: 34px;
    margin-top: 68px;

    img {
        position: absolute;
        top: 0;
        right: 0;
        width: 170px;
    }
`

export const ContainerText = styled.div`

margin-left: 32px;
margin-top: 32px;

h1 {
font-size: 24px;
font-weight: 400;
line-height: 28.08px;
text-align: left;
margin-bottom: 24px;
color: #20130B;
}

h2 {
font-size: 14px;
font-weight: 400;
line-height: 19px;
text-align: left;
color: #8B8B8B;

}
`

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 32px;
margin-left: 32px;
margin-right: 32px;


p {
    text-align: center;
    font-size: 13px;
    line-height: 15.21px;
    text-align: center;
    color: #BC8363;
    cursor: pointer;

}
`
export const InputS = styled.input`
border: 1px solid #E9ECEF;
border-radius: 8px;
height: 64px;
margin-bottom: 18px;
width: 100%;
padding-left: 62px;

&&::placeholder {
    color:#8B8B8B ;
    font-size: 13px;
    line-height: 15px;
}
`

export const MainButton = styled.button`
    text-decoration: none;
    display: inline-block;
    background-color: #BC8363;
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
    width: 100%;
    height: 55px;
    padding: 20px;
    gap: 18px;
    border-radius: 8px;
    opacity: 0px;
    border: none;
    margin-top: 2px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const InputField = styled.div`
width: 100%;
position: relative;

.icon {
position: absolute;
top: 22px;
left: 20px;
}

.icon2 {
position: absolute;
top: 22px;
right: 20px;
}

label {
    position: absolute;
    top: 8px;
    left: 62px;
    color: #20130B;
    font-size: 13px;
}
`