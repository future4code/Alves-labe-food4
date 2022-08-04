import React, { useContext } from 'react'
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
    const enderecoUser = useRequestData([], `${BASE_URL}rappi4B/profile`)
    const enderecoRes = useRequestData([], `${BASE_URL}rappi4B/restaurants`)
    const pedido = useRequestData([], `${BASE_URL}rappi4B/active-order`)
    const historico = useRequestData([], `${BASE_URL}rappi4B/orders/history`)
    console.log(pedido)
    console.log(historico)

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
        'id': '3vcYYSOEf8dKeTPd7vHe',
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        "description": "Pastel autêntico, feito na hora!",
        "name": "Pastel",
        "price": 8,
        'quantity': 2
    }, {
        "id": "5qVBu990QDEcBPOzitMy",
        "price": 5.5,
        "name": "Kibe",
        "category": "Salgado",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
        "description": "Kibe árabe de verdade",
        'quantity': 3
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

    // const renderOrderActive = pedido.order && pedido.order.map((pedido) => {
    //     return <div>
    //         {pedido.restaurantName}
    //         {pedido.totalPrice}
    //     </div>
    // })

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
        </MainContainer>
    )
}

export default Cart