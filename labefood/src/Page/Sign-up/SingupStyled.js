import styled from "styled-components"


export const TextConteinerSingUpPage = styled.h1 ` 
    font-family: 'ROBOTO';
    color: black;
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
`


export const LogoSingUpPage = styled.img ` 
    width: max-content;
    height: max-content;
    display: block;
    margin: auto;
    margin-top: 20px;
    @media only screen and (min-width: 736px) {
        width: min-content;
        height: min-content;
        width: 200px;
        height: 200px;
        display: block;
        margin-top: 10px;
        margin: auto;
    }
`

export const ConteinerInput = styled.div ` 
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 20px;
    margin: auto;
    
    
    input{
        color: black;
    }
`
export const ConteinerInputSenha = styled.div ` 
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 20px;
    margin: auto;
    justify-content: space-around;
    input{
        color: black;
    }
`

export const ButtonLogin = styled.button ` 
    color: black;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    margin-left: 20px;
`