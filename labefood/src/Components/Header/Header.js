import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Global/GlobalContext'
import { goToFeed, goToLogin, goToProfile, goToSingUp } from "../../Router/Coordinator";
import Back from "../../Img/back.png";
import styled from "styled-components";

const Container1 = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height: 44px;
`
const Container2 = styled.div`
`
const BotaoBack = styled.button`
border:none;
background:none;
`
const Container3 = styled.div`
`
const Container4 = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height: 44px;
padding-top:10px;
font-size: 20px;
`
const Container5 = styled.div`
`
const Container6 = styled.div`
`
const Container7 = styled.div`
`
const Container8 = styled.div`
`
const Container9 = styled.div`
`
const Container10 = styled.div`
`
const Container11 = styled.div`
`
const Container12 = styled.div`
`
const Container13 = styled.div`
`
const Container14 = styled.div`
`
const Container15 = styled.div`
`
const Container16 = styled.div`
`
const Container17 = styled.div`
`

function Header() {
    const { id } = useContext(GlobalContext)
    const navigate = useNavigate();

    const botaoHeader = () => {
        if (window.location.pathname === `/search`) {
            return (
                <Container1>
                    <Container2>
                        <BotaoBack onClick={() => goToFeed(navigate)}><img src={Back} width={24} /></BotaoBack>
                    </Container2>
                    <Container3>
                        <p>Busca</p>
                    </Container3>
                    <div>
                    </div>
                </Container1>
            );
        } else if (window.location.pathname === `/feed`) {
            return (
                <Container4>Rappi4 </Container4>
            );
        } else if (window.location.pathname === `/address`) {
            return (
                <button onClick={() => goToSingUp(navigate)}><img src={Back} width={20} /></button>
            );
        } else if (window.location.pathname === `/restaurantDetail`) {
            return (
                <Container1>
                    <Container2>
                        <BotaoBack onClick={() => goToFeed(navigate)}><img src={Back} width={24} /></BotaoBack>
                    </Container2>
                    <Container3>
                        <p>Restaurante</p>
                    </Container3>
                    <div>
                    </div>
                </Container1>
            );
        } else if (window.location.pathname === `/cart`) {
            return (
                <Container4>Meu Carrinho</Container4>
            );
        } else if (window.location.pathname === `/profile`) {
            return (
                <Container4>Meu Perfil</Container4>
            );
        }
    };

    return (
        <div>
            {botaoHeader()}
        </div>
    );
}

export default Header