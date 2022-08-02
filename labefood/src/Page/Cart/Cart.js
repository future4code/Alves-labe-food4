import React, { useContext } from 'react'
import useForm from '../../Hooks/UseForm'
import { BASE_URL } from '../../Components/BASE_URL'
import axios from 'axios'
import { GlobalContext } from '../../Global/GlobalContext'

function Cart() {

    const { restaurante, setRestaurante, bodyPedido, setBodyPedido, frete } = useContext(GlobalContext)
    const { form, pegaDados, limpaCampos } = useForm({
        paymentMethod: ''
    })

    const teste = [{
        'id': '3vcYYSOEf8dKeTPd7vHe',
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
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

    console.log(teste)

    const renderCarrinho = teste && teste.map((item, index) => {
        return <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => removeItem(item.id)}>remover</button>
        </div>
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


    return (
        <div>
            {renderCarrinho}
            <p>SUBTOTAL</p>
            <p>Frete</p>
            <h3>SUBTOTAL {total}</h3>
            <h3>Forma de pagamento</h3>
            <form onSubmit={limpaCampo}>
                <input type="checkbox" value='money' name='paymentMethod' onChange={pegaDados} />
                <label> Dinheiro </ label>
                <input type="checkbox" value='creditcard' name='paymentMethod' onChange={pegaDados} />
                <label> Cartão de crédito </label>
                <button onClick={placeOrder}>Confirmar</button>
            </form>
        </div>
    )
}

export default Cart