import React, { useContext } from 'react'
import useForm from '../../Hooks/UseForm'
import { BASE_URL } from '../../Components/BASE_URL'
import axios from 'axios'
import { GlobalContext } from '../../Global/GlobalContext'
import useRequestData from '../../Hooks/useRequestData'
import styled from 'styled-components'

const MainContainer = styled.div`
`
const Container1 = styled.div`
width: 100%;
/* height: 76px; */
background-color: #eeeeee;
/* height:100%; */
/* padding-top:20px; */
/* padding: 16px; */
`
const Container2 = styled.div`
padding-top:20px;
`
const Container3 = styled.div`
padding: 16px;
`
const Container4 = styled.div`
font-size: 16px;
color:#e86e5a;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
`
const Container5 = styled.div`
color:#b8b8b8;
width:100%;
`
const Container6 = styled.div`
display:flex;
justify-content:space-between;
`
const Container7 = styled.div`
width:100%;
border-radius: 10px;
border: solid 1px #b8b8b8;
margin-bottom:2%;
`
const Container8 = styled.div`
padding-right:40px;
`
const Container9 = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding-bottom:50px;
`
const Container10 = styled.div`
display:flex;
flex-direction: row-reverse;
`
const Container11 = styled.div`
color:#e86e5a;
`
const Container12 = styled.div`
color:#b8b8b8;
`
const Container13 = styled.div`
color:#000000;
`
const MainContainerPagamento = styled.div`
`
const Frete = styled.p`
display:flex;
flex-direction:row-reverse;
width:96%;
color:#000000;
`
const Container16 = styled.div`
display:flex;
justify-content:space-between;
width:96%;
`
const Container17 = styled.div`
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color:#000000;
  padding-left:4%;
  padding:8px;
`
const Container18 = styled.div`
padding:8px;
color:#e86e5a;
font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
`
const Input = styled.input`
 width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    :checked {
    background-color: gray;
    }
`
const Container20 = styled.div`
display:flex;
justify-content:center;
`
const Container21 = styled.div`
color:#b8b8b8;
`
const ImagemCard = styled.img`
width: 97px;
  height: 131px;
  object-fit:cover;
border-radius: 8px;
`
const Quantidade = styled.p`
width:10%;
text-align:center;
border:solid 1px #e86e5a;
border-radius: 0px 8px 0px 8px;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
color:#e02020;
padding: 7px 8px;
`
const BotaoRemove = styled.button`
border:solid 1px #e86e5a;
border-radius: 8px 0px 8px 0px;
background:none;
padding: 8px 23px 9px 24px;
color:
#e02020;
`
const Linha = styled.section`
border:1px solid black;
margin:10px 10px;
`
const BotaoConfirmar = styled.button`
 width: 360px;
  height: 42px;
  margin: 16px 0;
  padding: 0 16px;
  background-color:#e86e5a;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  border:none;
`
const Container25 = styled.div`
padding:20px;
`

function Cart() {
    const { restaurante, setRestaurante, bodyPedido, setBodyPedido, frete, restauranteSele } = useContext(GlobalContext)
    const { form, pegaDados, limpaCampos } = useForm({
        paymentMethod: ''
    })
    const enderecoUser = useRequestData([], `${BASE_URL}rappi4B/profile`)
    const enderecoRes = useRequestData([], `${BASE_URL}rappi4B/restaurants`)

    const enderecoResFilter = enderecoRes.restaurants && enderecoRes.restaurants.filter((res) => {
        return restauranteSele === res.id
    }).map((res) => {
        return <div key={res.id}>
            <Container4>
                {res.name}
            </Container4>
            <Container5>
                {res.address}
            </Container5>
            <Container5>
                {res.deliveryTime} Min
            </Container5>
        </div>
    })
    const teste = [{
        'id': '3vcYYSOEf8dKeTPd7vHe',
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        "description": "Pastel autêntico, feito na hora!",
        "name": "Pastel",
        "price": 8,
        'quantity': 2
    }, {
        'id': '3vcYYSOEf8dKeTPd7vHe',
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        "description": "Pastel autêntico, feito na hora!",
        "name": "Pastel",
        "price": 5,
        'quantity': 3
    }]

    const body = {
        "products": [{
            "id": "3vcYYSOEf8dKeTPd7vHe",
            "quantity": 10
        }, {
            "quantity": 1,
            "id": "5omTFSOBYiTqeiDwhiBx"
        }],
        "paymentMethod": form.paymentMethod
    }

    let total = teste.reduce(getTotal, 0);
    function getTotal(total, item) {
        return total + (item.price * item.quantity);
    }

    const removeItem = (id) => {
        teste.filter(item => {
            return id !== item.id
        })
    }

    const renderCarrinho = teste && teste.map((item, index) => {
        return <Container7 key={index}>
            <Container6>
                <ImagemCard src={item.photoUrl} />
                <div>
                    <Container10>
                        <Quantidade>{item.quantity}</Quantidade>
                    </Container10>
                    <Container8>
                        <Container11>
                            <h3>{item.name}</h3>
                        </Container11>
                        <Container12>
                            <p>{item.description}</p>
                        </Container12>
                        <Container13>
                            <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </Container13>
                    </Container8>
                    <Container10>
                        <BotaoRemove onClick={() => removeItem(item.id)}>remover</BotaoRemove>
                    </Container10>
                </div>
            </Container6>
        </Container7>
    })

    const placeOrder = () => {

        axios.post(`${BASE_URL}rappi4B/restaurants/1/order`, body, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkhSUlFLOWRjWER5ajB2eXh2bGdaIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2sxQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIxLjEyMS4xMzEtMTIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjU5NDUyNDk4fQ.iurT0aAFrZR2GJNyqrQQnJDveCXJdqHiaBOqhhurH50'
            }
        }).then(res => {
            console.log(res.data.order.order)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }

    const limpaCampo = (e) => {
        e.preventDefault()
        limpaCampos()
    }

    const verificaCarrinho = (teste.length > 0) ? (<div>{renderCarrinho}</div>) : (<p>Carrinho Vazio</p>)

    const verificaRestaurante = (restauranteSele) ? (<div>{enderecoUser.user && enderecoUser.user.address}</div>) : (<></>)

    const verificaFrete = (frete) ? <Frete>Frete {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Frete> : (<Frete>Frete: R$ 0,00</Frete>)

    return (
        <MainContainer>
            <Container1>
                <Container25>
                    <Container21>
                        Endereço de entrega <br />
                    </Container21>
                    <Container2>
                        {verificaRestaurante}
                    </Container2>
                </Container25>
            </Container1>
            <Container3>
                {enderecoResFilter && enderecoResFilter}
            </Container3>
            <Container9>
                {verificaCarrinho}
            </Container9>
            <MainContainerPagamento>
                {verificaFrete}
                <Container16>
                    <Container17>
                        <p>SUBTOTAL</p>
                    </Container17>
                    <Container18>
                        {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Container18>
                </Container16>
                <Container17>
                    <p>Forma de pagamento</p>
                </Container17>
                <Linha />
                <form onSubmit={limpaCampo}>
                    <Container17>
                        <div>
                            <Input type="checkbox" value='money' name='paymentMethod' onChange={pegaDados} />
                            <label> Dinheiro </ label>
                        </div>
                        <div>
                            <Input type="checkbox" value='creditcard' name='paymentMethod' onChange={pegaDados} />
                            <label> Cartão de crédito </label>
                        </div>
                    </Container17>
                    <Container20>
                        <BotaoConfirmar onClick={placeOrder}>Confirmar</BotaoConfirmar>
                    </Container20>
                </form>
            </MainContainerPagamento>
        </MainContainer>
    )
}

export default Cart