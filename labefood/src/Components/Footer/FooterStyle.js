import styled from 'styled-components'

export const ContainerMenu = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 49px;
    justify-content: center;
    width: 100vw;
    background-color: #fff;
    div {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    img {
        width: 27px;
    }
    
`
export const Pedido = styled.div`
  background-color: #e86e5a;
  color: white;
  letter-spacing: -0.39px;
  display: flex;
  align-items: center;
  padding: 20px;
  
  p {
    margin: 8px 0 8px 24px;
  }
  h4 {
    color: black;
    margin: 8px 0 8px 24px;
  }
  img {
    margin: 2px 24px 0 0;
  }
`