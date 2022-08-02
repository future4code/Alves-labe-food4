import React, { useState } from "react";
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

    const [restaurante, setRestaurante] = useState()
    const [bodyPedido, setBodyPedido] = useState()
    const [frete, setFrete] = useState()
    const [restauranteSele, setRestaurenteSele] = useState([])

    const value = {
        restaurante,
        setRestaurante,
        bodyPedido,
        setBodyPedido,
        frete,
        setFrete,
        setRestaurenteSele,
        restauranteSele,
    }

    const Provider = GlobalContext.Provider

    return <Provider value={value}>{props.children}</Provider>
}