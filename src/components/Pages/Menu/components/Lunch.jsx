import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

import OptionsButton from './OptionsButton'

import {orderContext} from '../../../../context/OrderContext'
import colors from '../../../../styles/colors'
import {comidasBebidas, comidasHamburguesas, comidasAcompañamientos, comidasExtras, extrasHamburguesas} from '../../../../context/menú'

const LunchDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: none;
    flex-wrap: wrap;
    flex-direction: column;
`
const CategoryDiv = styled.div`
     width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`
const Title = styled.h2`
    font-size: 25px;
    margin: 15px;
    width: fit-content;
    border-bottom: 3px solid ${colors.yellow};
`
const ExtrasDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    border: 2px black ${colors.orange};
    border-radius: 10px;
`
const ButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
`
const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
`

export default function Lunch({on}) {

    
    const {orderItems, setOrderItems, hambExtras, setHambExtras} = useContext(orderContext);
    const [optionsView, setOptionsView] = useState("none")

    function orderListHandler(productOrder) {
        if(optionsView === "flex"){
            alert("por favor selecciona extras de hamburguesa antes de elgir otro platillo")
        } else {
            setOrderItems([...orderItems, {id: orderItems.length + 1, price: productOrder.price, item: productOrder.item}])
            console.log(orderItems)
        }
    }

    function hamburgerHanler(productOrder) {
        setOptionsView("flex")
        setOrderItems([...orderItems, {id: orderItems.length + 1, price: productOrder.price, item: productOrder.item}])
        console.log(orderItems)
    }

    function setExtrasHandler(productOrder) {
        setOrderItems([...orderItems, {id: orderItems.length + 1, price: productOrder.price, item: productOrder.item}])
        setOptionsView("none")
        console.log(orderItems)
    }
    

    return(
        <LunchDiv style={{display: on}}>
            <Title>Para tomar</Title>
            <CategoryDiv>
                {comidasBebidas.map((product) => {
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => orderListHandler(product)}/>
                })}  
            </CategoryDiv>
            <Title>Hamburguesas</Title>
            <CategoryDiv>
                {comidasHamburguesas.map((product) => {
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => hamburgerHanler(product)}/>
                })}  
                <ExtrasDiv style={{display: optionsView}}>
                    <Text>¿Gusta añadir extras a su hamburguesa?</Text>
                    <ButtonsDiv>
                        {extrasHamburguesas.map((product) => {
                            return <OptionsButton key={product.id} title={product.item} price={product.price} handler={()=>setExtrasHandler(product)}/>
                        })} 
                        <OptionsButton title="no" handler={()=>setOptionsView("none")}/>
                    </ButtonsDiv>
                </ExtrasDiv>
            </CategoryDiv>
            <Title>Acompañamientos</Title>
            <CategoryDiv>
                {comidasAcompañamientos.map((product) => {
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => orderListHandler(product)}/>
                })}  
            </CategoryDiv>
        </LunchDiv>
    )
}