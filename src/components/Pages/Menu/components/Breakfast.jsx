import React, {useContext} from 'react'
import styled from 'styled-components'

import OptionsButton from './OptionsButton'
import {orderContext} from '../../../../context/OrderContext'

import colors from '../../../../styles/colors'

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

    function handleOrderItems (e) {
/*         setOrderItems([
            ...orderItems,
            e.title
        ]) */

        console.log(e.target)
    }

    return(
        <BreakfastDiv style={{display: on}}>
            <Title>Para tomar</Title>
            <CategoryDiv>
                <OptionsButton handler={handleOrderItems} title="Café americano" price="$5.00"/>
                <OptionsButton handler={handleOrderItems} title="Café con leche" price="$7.00"/>
                <OptionsButton handler={handleOrderItems} title="Jugo de frutas natural" price="$7.00"/>
            </CategoryDiv>
            <Title>Sandwiches</Title>
            <CategoryDiv>
                <OptionsButton handler={handleOrderItems} title="Sandwich de jamón y queso" price="$10.00"/>
            </CategoryDiv>
        </BreakfastDiv>
    )
}