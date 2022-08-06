import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Global/GlobalContext'
import { BASE_URL } from '../../Components/BASE_URL'
import useRequestData from '../../Hooks/useRequestData'
import useForm from '../../Hooks/UseForm'
import { goTocart } from '../../Router/Coordinator'

function RestaurantDetail() {
    const { carrinho, setCarrinho, setProducts, products } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { restaurant } = useRequestData([], `${BASE_URL}rappi4B/restaurants/${localStorage.getItem('id')}`)
    const { form, pegaDados, limpaCampos } = useForm({
        'quantity': ''
    })

    const renderCategoria = restaurant && restaurant.products.map((item) => {
        return item.category
    })
    const filtrarCategoria = renderCategoria && renderCategoria.filter((nomeCategoria, index) => {
        return renderCategoria.indexOf(nomeCategoria) === index
    })

    const limpaCampo = (e) => {
        e.preventDefault()
    }

    const renderizaProduto = () => {
        const renderProdutos = filtrarCategoria && filtrarCategoria.map((categoria, index) => {
            return (
                <div key={index}>
                    <h2>{categoria}</h2>
                    {restaurant && restaurant?.products.map((item, index) => {
                        if (categoria === item.category) {
                            return (
                                <div key={index}>
                                    <img src={item.photoUrl} width={200} />
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    <form onSubmit={limpaCampo}>
                                        <select name='quantity' onChange={pegaDados}>
                                            <option name='quantity'>0</option>
                                            <option name='quantity'>1</option>
                                            <option name='quantity'>2</option>
                                            <option name='quantity'>3</option>
                                            <option name='quantity'>4</option>
                                            <option name='quantity'>5</option>
                                        </select>
                                        <button onClick={() => adicionaCarrinho(item.id)}>Adicionar</button>
                                    </form>
                                </div>
                            )
                        }
                    })}
                </div>
            )
        })

        return renderProdutos
    }


    const adicionaCarrinho = (id) => {
        const itemNoCarrinho = carrinho.find(item => id === item.id)
        if (itemNoCarrinho) {
            setProducts(products.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        'quantity': item.quantity + parseInt(form.quantity)
                    }
                }
                return item
            }))
            console.log(products)
            setCarrinho(carrinho.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        'quantity': item.quantity + parseInt(form.quantity)
                    }
                }
                return item
            }))
        } else {
            
            const itemAdicionado = restaurant && restaurant.products.find(item => id === item.id)
            const novosItensCarrinho = [...carrinho, { ...itemAdicionado, 'quantity': parseInt(form.quantity) }]
            setCarrinho(novosItensCarrinho)

            const novosItem = [...products, {id: id,'quantity': parseInt(form.quantity)} ]
            setProducts(novosItem)

            console.log(products)
        }
    }

    const removeArray = () => {
        const teste = products.shift()
        console.log(teste)
    }

    return (
        <div>
            <div>
                <img src={restaurant && restaurant.logoUrl} />
                <button onClick={() => {removeArray();goTocart(navigate)}}>Carrinho</button>
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