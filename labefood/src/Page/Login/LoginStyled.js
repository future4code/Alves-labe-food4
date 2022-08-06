import styled from "styled-components";



export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.div`
  width: 360px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    color: #000000;
`

export const EmailInput = styled.input`
    width: 70vw;
    padding: 1.188rem 3rem 1.188rem 1rem;
    font-size: 1rem;
    margin-left: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
`

export const PasswordInput = styled.input`
    width: 70vw;
    padding: 1.188rem 3rem 1.188rem 1rem;
    margin-left: 0.75rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    border-radius: 4px;
    border: solid 1px #b8b8b8;

`

export const LoginButton = styled.button`
    margin: 0.938rem 0;
    background-color: #e86e5a;
    width: 90vw;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    border: none;
    border-radius: 0.313rem;
`


export const ButtonSignUp = styled.button`
    margin-top: 1.3rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1rem;
     `
export const LogoLoginPage  = styled.img ` 
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
