import React, { useContext, useEffect, useState } from 'react'
import useForm from '../../Hooks/UseForm'
import { BASE_URL } from '../../Components/BASE_URL'
import axios from 'axios'
import { GlobalContext } from '../../Global/GlobalContext'
import useRequestData from '../../Hooks/useRequestData'
import { ContainerUser, BotaoConfirmar, Linha, BotaoRemove, Quantidade, ImagemCard, ContainerEndereco, ContainerBotaoConfirmar, Input, ContainerPrecoTotal, ContainerSubTotal, ContainerPagamento, Frete, MainContainerPagamento, ContainerValorPedido, ContainerDescricao, ContainerNome, ContainerQuantidade, ContainerCarrinho, ContainerPedido, MainContainerMapCart, ContainerMapCart, EnderecoRes, NomeRes, ContainerResFiltrado, ContainerEnderecoRes, MainContainer, ContainerEnderecoUser } from "./CartStyled"
import Footer from '../../Components/Footer/Footer'

function Cart() {
    const { restaurante, setRestaurante, bodyPedido, setBodyPedido, frete, restauranteSele, carrinho, setCarrinho, products, setProducts } = useContext(GlobalContext)
    const { form, pegaDados, limpaCampos } = useForm({
        paymentMethod: ''
    })
    const [pedido, setPedido] = useState()
    const enderecoUser = useRequestData([], `${BASE_URL}rappi4B/profile`)
    const enderecoRes = useRequestData([], `${BASE_URL}rappi4B/restaurants`)

    useEffect(() => {
        receberOrder()
    }, [])


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

    let total = carrinho.reduce(getTotal, 0);
    function getTotal(total, item) {
        return total + (item.price * item.quantity);
    }

    const removerItem = (itemID) => {
        const novosProdutos = carrinho.map((item) => {
            if (item.id === itemID) {
                return {
                    ...item,
                    quantidade: item.quantidade - 1
                }
            }
            return item
        }).filter((item) => item.quantidade > 0)
        setCarrinho(novosProdutos)
    }

    const receberOrder = () => {
        axios.get(`${BASE_URL}rappi4B/active-order`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((resposta) => {
            setPedido(resposta.data.order)
        }).catch((erro) => {
            console.log(erro)
        })
    }


    const renderCarrinho = carrinho && carrinho.map((item, index) => {
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
                        <BotaoRemove onClick={() => removerItem(item.id)}>remover</BotaoRemove>
                    </ContainerQuantidade>
                </div>
            </ContainerMapCart>
        </MainContainerMapCart>
    })

    const body = {
        products: products,
        "paymentMethod": form.paymentMethod
    }

    const placeOrder = () => {
        products.shift()
        axios.post(`${BASE_URL}rappi4B/restaurants/${localStorage.getItem('id')}/order`, body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then(res => {
            alert(res.data)
        }).catch(err => {
            alert(err.response.data.message)
        })
    }

    const limpaCampo = (e) => {
        e.preventDefault()
        limpaCampos()
    }

    const verificaCarrinho = (carrinho.length > 0) ? (<div>{renderCarrinho}</div>) : (<p>Carrinho Vazio</p>)

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
            <Footer />
        </MainContainer>
    )
}

export default Cart