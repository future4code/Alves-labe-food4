import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Global/GlobalContext'
import { BASE_URL } from '../../Components/BASE_URL'
import useRequestData from '../../Hooks/useRequestData'

function RestaurantDetail() {
    const { restauranteSele, frete, ola, setOla } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { restaurant } = useRequestData([], `${BASE_URL}rappi4B/restaurants/${localStorage.getItem('id')}`)
    const renderCategoria = restaurant && restaurant.products.map((item) => {
        // console.log(item.category)
        return item.category
    })
    const filtrarCategoria = renderCategoria && renderCategoria.filter((nomeCategoria, index) => {
        console.log(index)
        console.log(nomeCategoria)
        return renderCategoria.indexOf(nomeCategoria) === index
    })

    const renderizaProduto = () => {

        const renderProdutos = filtrarCategoria &&
            filtrarCategoria.map((categoria, index) => {
                return (
                    <div key={index}>
                        <p><h2>{categoria}</h2></p>
                        {restaurant && restaurant?.products.map((item, index) => {
                            if (categoria === item.category) {
                                return (
                                    <div key={index}>
                                        <img src={item.photoUrl} width={200} />
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                        <button>Adicionar</button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )
            })

        return renderProdutos
    }


    return (
        <div>
            <div>
                <img src={restaurant && restaurant.logoUrl} />
                <p>{restaurant && restaurant.name}</p>
                <p>{restaurant && restaurant.category}</p>
                <p>{restaurant && restaurant.deliveryTime} - {restaurant && restaurant.deliveryTime + 10} min</p>
                <p>Frete R$ {localStorage.getItem('frete')},00</p>
                <p>{restaurant && restaurant.address}</p>
            </div>
            <div>
                {renderizaProduto()}
            </div>
        </div>
    )
}

export default RestaurantDetail