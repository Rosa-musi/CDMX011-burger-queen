import React from 'react'
import styled from 'styled-components'

import OptionsButton from './OptionsButton'

import colors from '../../../../styles/colors'

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
    return(
        <LunchDiv style={{display: on}}>
            <Title>Para tomar</Title>
            <CategoryDiv>
                <OptionsButton title="Agua 500ml" price="$5.00"/>
                <OptionsButton title="Agua 750mml" price="$7.00"/>
                <OptionsButton title="Bebida/gaseosa 500ml" price="$7.00"/>
                <OptionsButton title="Bebida/gaseosa 700ml" price="$10.00"/>
            </CategoryDiv>
            <Title>Hamburguesas</Title>
            <CategoryDiv>
                <OptionsButton title="Hamburguesa simple" price="$10.00"/>
                <OptionsButton title="Hamburguesa doble" price="$15.00"/>
            </CategoryDiv>
            <Title>Acompañamientos</Title>
            <CategoryDiv>
                <OptionsButton title="Papas fritas" price="$5.00"/>
                <OptionsButton title="Aros de cebolla" price="$5.00"/>
            </CategoryDiv>
            <Title>Extras</Title>
            <CategoryDiv>
                <OptionsButton title="Queso" price="$1.00"/>
                <OptionsButton title="Huevo" price="$1.00"/>
            </CategoryDiv>
        </LunchDiv>
    )
}