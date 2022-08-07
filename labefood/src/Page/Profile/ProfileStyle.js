import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const Paragraph = styled.h5`
  margin: 0.25rem;
`;
export const OrdemStyle = styled.div`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
    margin-bottom: 10px;
`
export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eeeeee;
`;
export const Total = styled.div`
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`
export const AddressParagraph = styled.div`
  margin: 0.25rem;
  color: #b8b8b8;
`;

export const HistoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
export const HistoryParagraph = styled.p`
  border-bottom: solid 1px black;
  padding-bottom: 0.5rem;
`;
export const CartParagraph = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
`;