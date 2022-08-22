import styled from "styled-components";

export const ConteinerSignUpAddressPage = styled.div ` 
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

export const TextConteinerLoginPage = styled.h1 ` 
    font-family: 'ROBOTO';
    color: #000000;
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
`

export const LogoLoginPage = styled.img ` 
    width: max-content;
    height: max-content;
    display: block;
    margin: auto;
    margin-top: 20px;
    @media only screen and (min-width: 736px) {
        width: min-content;
        height: min-content;
        width: 250px;
        height: 250px;
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

export const ConteinerButton = styled.div ` 
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 20px;
    margin: auto;
    background-color: black;
`

export const ButtonCadastro = styled.button ` 
    color: black;
    background-color: transparent;
    border: none;
    display: block;
    margin: auto;
`
export const ButtonLogin = styled.button ` 
    color: black;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    margin-left: 20px;
`

export const TextConteinerAddressPage = styled.h1 ` 
    font-family: 'ROBOTO';
    color: #000000;
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
`
export const SignUpAddressPage = styled.img ` 
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

export const ButtonStyle= styled.button`
     margin: 0.938rem 0;
    background-color: #e86e5a;
    width: 90vw;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    border: none;
    border-radius: 0.313rem;
     `