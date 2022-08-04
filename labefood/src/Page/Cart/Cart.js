import React, { useContext, useEffect, useState } from 'react'
import useForm from '../../Hooks/UseForm'
import { BASE_URL } from '../../Components/BASE_URL'
import axios from 'axios'
import { GlobalContext } from '../../Global/GlobalContext'
import useRequestData from '../../Hooks/useRequestData'
import { ContainerUser, BotaoConfirmar, Linha, BotaoRemove, Quantidade, ImagemCard, ContainerEndereco, ContainerBotaoConfirmar, Input, ContainerPrecoTotal, ContainerSubTotal, ContainerPagamento, Frete, MainContainerPagamento, ContainerValorPedido, ContainerDescricao, ContainerNome, ContainerQuantidade, ContainerCarrinho, ContainerPedido, MainContainerMapCart, ContainerMapCart, EnderecoRes, NomeRes, ContainerResFiltrado, ContainerEnderecoRes, MainContainer, ContainerEnderecoUser } from "./CartStyled"


function Cart() {
    const { restaurante, setRestaurante, bodyPedido, setBodyPedido, frete, restauranteSele } = useContext(GlobalContext)
    const { form, pegaDados, limpaCampos } = useForm({
        paymentMethod: ''
    })
    const [pedido, setPedido] = useState()
    const enderecoUser = useRequestData([], `${BASE_URL}rappi4B/profile`)
    const enderecoRes = useRequestData([], `${BASE_URL}rappi4B/restaurants`)
    const historico = useRequestData([], `${BASE_URL}rappi4B/orders/history`)

    const enderecoResFilter = enderecoRes.restaurants && enderecoRes.restaurants.filter((res) => {
        return restauranteSele === res.id
    }).map((res) => {
        return <div key={res.id}>
            <NomeRes>
                {res.name}
            </NomeRes>
            <EnderecoRes>
                {res.address}
            </EnderecoRes>
            <EnderecoRes>
                {res.deliveryTime} Min
            </EnderecoRes>
        </div>
    })
    const teste = [{
        "id": "3vcYYSOEf8dKeTPd7vHe",
        "price": 3,
        "name": "Pastel",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        "category": "Pastel",
        "description": "Pastel autêntico, feito na hora!",
        'quantity': 2
    }, {
        "id": "XHhajKAtvIH2Dq6F83PX",
        "category": "Bebida",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
        "price": 7.9,
        "description": "Laranja, Acerola ou Maçã",
        "name": "Suco",
        'quantity': 3
    }, {
        "id": "bEj2JorVLWo86iJf7OF9",
        "price": 4,
        "photoUrl": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg",
        "description": "Coca cola, Sprite ou Guaraná",
        "category": "Bebida",
        "name": "Refrigerante",
        "quantity": 7
    }]

    const body = {
        "products": [{
            "id": "3vcYYSOEf8dKeTPd7vHe",
            "quantity": 10
        }, {
            "quantity": 1,
            "id": "5qVBu990QDEcBPOzitMy"
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

    const receberOrder = () => {
        axios.get(`${BASE_URL}rappi4B/active-order`, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imh4TXVraFpIRm1WSG9hWk1XNVgwIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2s1NEBmdXR1cmU1LmNvbSIsImNwZiI6IjE1Ni40NTEuMTUxLTEyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1OTYyMDgxOH0.BdxJfcY7L5mt-jJN7I9xYTbwkHD2FbJZkA6RjY8x1n4"
            }
        }).then((resposta) => {
            setPedido(resposta.data.order)
        }).catch((erro) => {
            console.log(erro)
        })
    }
    useEffect(() => {
        receberOrder()
    }, [])


    const renderCarrinho = teste && teste.map((item, index) => {
        return <MainContainerMapCart key={index}>
            <ContainerMapCart>
                <ImagemCard src={item.photoUrl} />
                <div>
                    <ContainerQuantidade>
                        <Quantidade>{item.quantity}</Quantidade>
                    </ContainerQuantidade>
                    <ContainerPedido>
                        <ContainerNome>
                            <h3>{item.name}</h3>
                        </ContainerNome>
                        <ContainerDescricao>
                            <p>{item.description}</p>
                        </ContainerDescricao>
                        <ContainerValorPedido>
                            <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </ContainerValorPedido>
                    </ContainerPedido>
                    <ContainerQuantidade>
                        <BotaoRemove onClick={() => removeItem(item.id)}>remover</BotaoRemove>
                    </ContainerQuantidade>
                </div>
            </ContainerMapCart>
        </MainContainerMapCart>
    })

    const placeOrder = () => {
        axios.post(`${BASE_URL}rappi4B/restaurants/1/order`, body, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imh4TXVraFpIRm1WSG9hWk1XNVgwIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2s1NEBmdXR1cmU1LmNvbSIsImNwZiI6IjE1Ni40NTEuMTUxLTEyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1OTYyMDgxOH0.BdxJfcY7L5mt-jJN7I9xYTbwkHD2FbJZkA6RjY8x1n4'
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
            <ContainerEnderecoUser>
                <ContainerUser>
                    <ContainerEndereco>
                        Endereço de entrega <br />
                    </ContainerEndereco>
                    <ContainerEnderecoRes>
                        {verificaRestaurante}
                    </ContainerEnderecoRes>
                </ContainerUser>
            </ContainerEnderecoUser>
            <ContainerResFiltrado>
                {enderecoResFilter && enderecoResFilter}
            </ContainerResFiltrado>
            <ContainerCarrinho>
                {verificaCarrinho}
            </ContainerCarrinho>
            <MainContainerPagamento>
                {verificaFrete}
                <ContainerPagamento>
                    <ContainerSubTotal>
                        <p>SUBTOTAL</p>
                    </ContainerSubTotal>
                    <ContainerPrecoTotal>
                        {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </ContainerPrecoTotal>
                </ContainerPagamento>
                <ContainerSubTotal>
                    <p>Forma de pagamento</p>
                </ContainerSubTotal>
                <Linha />
                <form onSubmit={limpaCampo}>
                    <ContainerSubTotal>
                        <div>
                            <Input type="checkbox" value='money' name='paymentMethod' onChange={pegaDados} />
                            <label> Dinheiro </ label>
                        </div>
                        <div>
                            <Input type="checkbox" value='creditcard' name='paymentMethod' onChange={pegaDados} />
                            <label> Cartão de crédito </label>
                        </div>
                    </ContainerSubTotal>
                    <ContainerBotaoConfirmar>
                        <BotaoConfirmar onClick={placeOrder}>Confirmar</BotaoConfirmar>
                    </ContainerBotaoConfirmar>
                </form>
            </MainContainerPagamento>
            <div>
                <p>Pedido em andamento</p>
                <p>{pedido?.restaurantName}</p>
                <div>
                    <p>SUBTOTAL {pedido?.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default Cart