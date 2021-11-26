import React, {useContext, useState} from 'react'
import styled from 'styled-components'

import OptionsButton from './OptionsButton'
import {orderContext} from '../../../../context/OrderContext'

import colors from '../../../../styles/colors'
import {desayunoBebidas, desayunoComidas} from '../../../../context/menú'

const BreakfastDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: none;
    flex-direction: column;
    flex-wrap: wrap;
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

export default function Breakfast({on}) {

    const {orderItems, setOrderItems} = useContext(orderContext);

    function orderListHandler(productOrder) {
        setOrderItems([...orderItems, {id: productOrder.id, price: productOrder.price, item: productOrder.item}])
        console.log(orderItems)
    }

    return(
        <BreakfastDiv style={{display: on}}>
            <Title>Para tomar</Title>
            <CategoryDiv>
             {desayunoBebidas.map((product) => {
                 return <OptionsButton key={product.id} title={product.item} price={product.price} handler={()=>orderListHandler(product)}/>
             })}   
            </CategoryDiv>
            <Title>Sandwiches</Title>
            <CategoryDiv>
                <OptionsButton key={desayunoComidas.id} title={desayunoComidas.item} price={desayunoComidas.price} handler={()=>orderListHandler(desayunoComidas)}/>
            </CategoryDiv>
        </BreakfastDiv>
    )
}