import React, { useState } from "react";
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

    const [restaurante, setRestaurante] = useState()
    const [bodyPedido, setBodyPedido] = useState()
    const [frete, setFrete] = useState()
    const [restauranteSele, setRestaurenteSele] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [products, setProducts] = useState([{
        id: '',
        quantity: ''
    }])

    const value = {
        restaurante,
        setRestaurante,
        bodyPedido,
        setBodyPedido,
        frete,
        setFrete,
        restauranteSele,
        setRestaurenteSele,
        carrinho,
        setCarrinho,
        products,
        setProducts

    }

    const Provider = GlobalContext.Provider

    return <Provider value={value}>{props.children}</Provider>
}