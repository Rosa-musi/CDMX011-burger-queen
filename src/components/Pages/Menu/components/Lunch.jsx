import React, {useContext} from 'react'
import styled from 'styled-components'

import OptionsButton from './OptionsButton'
import {orderContext} from '../../../../context/OrderContext'

import colors from '../../../../styles/colors'
import {comidasBebidas, comidasHamburguesas, comidasAcompañamientos, comidasExtras} from '../../../../context/menú'

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

export default function Lunch({on}) {

    const {orderItems, setOrderItems} = useContext(orderContext);

    function orderListHandler(productOrder) {
        setOrderItems([...orderItems, {id: productOrder.id, price: productOrder.price, item: productOrder.item}])
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
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => orderListHandler(product)}/>
                })}  
            </CategoryDiv>
            <Title>Acompañamientos</Title>
            <CategoryDiv>
                {comidasAcompañamientos.map((product) => {
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => orderListHandler(product)}/>
                })}  
            </CategoryDiv>
            <Title>Extras</Title>
            <CategoryDiv>
                {comidasExtras.map((product) => {
                    return <OptionsButton key={product.id} title={product.item} price={product.price} handler={() => orderListHandler(product)}/>
                })}  
            </CategoryDiv>
        </LunchDiv>
    )
}