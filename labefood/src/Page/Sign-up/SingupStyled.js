import styled from "styled-components"

export const ConteinerSingUpPage = styled.div ` 
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #B8B8B8;
   
@media(max-width: 480px) {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #B8B8B8;
    overflow: scroll;
}
@media(max-width: 350px) {
    margin: 0;
    overflow: scroll;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #B8B8B8;
}
`

export const TextConteinerSingUpPage = styled.h1 ` 
    font-family: 'ROBOTO';
    color: #000000;
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

export const ContainerLogin = styled.div ` 
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 20px;
    margin: auto;
    justify-content: space-around;
    input{
        color: black;
    }
`
export const ConteinerInputSenha = styled.div ` 
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 20px;
    margin: auto;
    justify-content: space-around;
    input{
        color: black;
    }
`


export const ButtonSignUp = styled.button`
    margin-top: 1.3rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1rem;
     `




