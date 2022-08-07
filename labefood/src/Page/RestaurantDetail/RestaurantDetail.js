import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Global/GlobalContext'
import { BASE_URL } from '../../Components/BASE_URL'
import useRequestData from '../../Hooks/useRequestData'
import useForm from '../../Hooks/UseForm'
import { goTocart } from '../../Router/Coordinator'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios'

const MainContainer = styled.div`
width:100vw;
`
const Container1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Container2 = styled.div`
`
const ImageLogo = styled.img`
width:328px;
height:120px;
object-fit:cover;
padding-left:5px;
margin: 17px 16px 12px;
border-radius: 8px 8px 0px 0px;
`
const Container3 = styled.div`
color:#e86e5a;
`
const Container4 = styled.div`
color:#b8b8b8;
`
const Container5 = styled.div`
color:#b8b8b8;
`
const Container6 = styled.div`
color:#b8b8b8;
`
const Container7 = styled.div`
color:#b8b8b8;
`
const Container8 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:stretch;
padding-right:7%;
`
const Container9 = styled.div`
display:flex;
`
const Container10 = styled.div`
padding-right:40px;
`
const Container11 = styled.div`
width:100vw;
`
const Container12 = styled.p`
color:#e86e5a;
padding-left:20px;
`
const Container13 = styled.p`
color:#b8b8b8;
padding-left:20px;
`
const Container14 = styled.p`
color:#000000;
padding-left:20px;
`
const Container15 = styled.div`
height:100%;
display:flex;
justify-content:center;
`
const Container16 = styled.div`
`
const Container17 = styled.div`
width:90%;
/* height:19vh; */
border-radius: 10px;
border: solid 1px #b8b8b8;
margin-top:2%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Container18 = styled.div`
display:flex;
flex-direction: row-reverse;
`
const Container19 = styled.div`
`
const Container20 = styled.div`
`
const Container21 = styled.div`
`
const Container22 = styled.div`
`
const Container23 = styled.div`
`
const Container24 = styled.div`
`
const Container25 = styled.div`
`
const ImagemMap = styled.img`
width: 97px;
height: 112.6px;
border-radius: 8px;
background-color: #d8d8d8;
object-fit:cover;
`
const Linha = styled.section`
border:1px solid black;
margin:10px 10px;
`
const Titulo = styled.section`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
`
const BotaoAdd = styled.button`
border:solid 1px #e86e5a;
border-radius: 8px 0px 8px 0px;
background:none;
padding: 8px 23px 9px 24px;
color:#e02020;
`

function RestaurantDetail() {

    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [gabi, setGabi] = useState()

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };



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
                    <Titulo>{categoria}</Titulo>
                    <Linha />
                    {restaurant && restaurant?.products.map((item, index) => {
                        if (categoria === item.category) {
                            return (
                                <Container15 key={index}>
                                    <Container17>
                                        <Container16>
                                            <ImagemMap src={item.photoUrl} />
                                        </Container16>
                                        <Container11 Container11 >
                                            <Container12>{item.name}</Container12>
                                            <Container13>{item.description}</Container13>
                                            <Container14>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Container14>
                                            <form onSubmit={limpaCampo}>
                                                <select name='quantity' onChange={pegaDados}>
                                                    <option name='quantity'>0</option>
                                                    <option name='quantity'>1</option>
                                                    <option name='quantity'>2</option>
                                                    <option name='quantity'>3</option>
                                                    <option name='quantity'>4</option>
                                                    <option name='quantity'>5</option>
                                                </select>
                                                <Container18>
                                                    <BotaoAdd onClick={() => adicionaCarrinho(item.id)}>Adicionar</BotaoAdd>
                                                </Container18>
                                            </form>
                                        </Container11>
                                    </Container17>
                                </Container15>
                            )
                        }
                    })
                    }
                </div >
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

            const novosItem = [...products, { id: id, 'quantity': parseInt(form.quantity) }]
            setProducts(novosItem)

            console.log(products)
        }
    }

    return (
        <MainContainer>
            <Button onClick={handleClickOpen}>Quantidade</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Selecione a quantidade desejada</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel htmlFor="demo-dialog-native">Quantidade</InputLabel>
                            <Select
                                native
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="0" id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option name='quantity'>1</option>
                                <option name='quantity'>2</option>
                                <option name='quantity'>3</option>
                                <option name='quantity'>4</option>
                                <option name='quantity'>5</option>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>


            <Container1>
                <Container2>
                    <ImageLogo src={restaurant && restaurant.logoUrl} />
                </Container2>
                <Container8>
                    <Container3>
                        <p>{restaurant && restaurant.name}</p>
                    </Container3>
                    <Container4>
                        <p>{restaurant && restaurant.category}</p>
                    </Container4>
                    <Container9>
                        <Container10>
                            <Container5>
                                <p>{restaurant && restaurant.deliveryTime} - {restaurant && restaurant.deliveryTime + 10} min</p>
                            </Container5>
                        </Container10>
                        <Container6>
                            <p>Frete R$ {localStorage.getItem('frete')},00</p>
                        </Container6>
                    </Container9>
                    <Container7>
                        <p>{restaurant && restaurant.address}</p>
                    </Container7>
                </Container8>
            </Container1>
            <div>
                {renderizaProduto()}
            </div>
            <button onClick={() => { goTocart(navigate) }}>Carrinho</button>
        </MainContainer >
    )
}

export default RestaurantDetail