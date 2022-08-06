import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Global/GlobalContext'
import { BASE_URL } from '../../Components/BASE_URL'
import useRequestData from '../../Hooks/useRequestData'

function RestaurantDetail() {
    const { restauranteSele, frete, ola, setOla } = useContext(GlobalContext)
    const navigate = useNavigate()
    const restaurants = useRequestData([], `${BASE_URL}rappi4B/restaurants/${localStorage.getItem('id')}`)

    const renderizaProduto = (parametro) => {
        const renderProdutos = restaurants.restaurant && restaurants.restaurant.products.map((item, index) => {
            if (item.category === parametro) {
                return <div key={index}>
                    <img src={item.photoUrl} />
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <button>Adicionar</button>
                </div>
            }
        })

        return renderProdutos
    }

    const renderCategoria = restaurants.restaurant && restaurants.restaurant.products.map((item, index) => {
        console.log(item.category)
    })

    return (
        <div>
            <img src={restaurants.restaurant && restaurants.restaurant.logoUrl} />
            <p>{restaurants.restaurant && restaurants.restaurant.name}</p>
            <p>{restaurants.restaurant && restaurants.restaurant.category}</p>
            <p>{restaurants.restaurant && restaurants.restaurant.deliveryTime} - {restaurants.restaurant && restaurants.restaurant.deliveryTime + 10} min</p>
            <p>Frete R$ {localStorage.getItem('frete')},00</p>
            <p>{restaurants.restaurant && restaurants.restaurant.address}</p>
            <h3>Principais</h3>
            {renderizaProduto('Lanche')}
            <p>Sorvete</p>
            {renderizaProduto('Sorvete')}
            <p>Acompanhamentos</p>
            {renderizaProduto('Acompanhamentos')}
            <p>Bebidas</p>
            {renderizaProduto('Bebidas')}
            {renderCategoria}

        </div>
    )
}

export default RestaurantDetail