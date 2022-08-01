import styled from "styled-components";

export const MainContainer = styled.div`
height:100%;
width:100%;
`
export const MainContainerMap = styled.div`
padding: 8px 16px 0;

`
export const ContainerNameRest = styled.div`
color: #e86e5a;
display:flex;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
padding-bottom:10px;
padding-left:10px;
`
export const ContainerFrete = styled.div`
  color: #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding-bottom:10px;
  padding-right:10px;
`
export const ContainerMin = styled.div`
  color: #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding-left:10px;
`
export const ContainerRenderMain = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ContainerInfoTime = styled.div`
display:flex;
justify-content:space-between;
`
export const ContainerImage = styled.div`
padding-bottom:2%;
`
export const CaptureOrder = styled.button`
height:20%;
border:#b8b8b8 solid 1px;
background:none;
margin-bottom:5%;
border-radius:8px;
`
export const Image = styled.img`
width: 100%;
border-radius: 7px 7px 0px 0px;
`

export const CampoBotao = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 10px;
  width: 355px;
  ::-webkit-scrollbar {
    background: white;
}
  button {
    margin: 5px;
    margin-right: 20px;
    background-color: white;
    border: 1px solid white;
    font-size: 16px;
    :hover {
      color: #e86e5a;
    }
  }
`
export const Pesquisa = styled.input`
  width: 280px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: none;
  font-size: 16px;
`

export const Icone = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 15.3px 0 10px;
`
export const CampoDados = styled.div`
  border: 1px solid #b8b8b8;
  margin: 10px;
`

export const Texto = styled.p`
  text-align: center;
`
