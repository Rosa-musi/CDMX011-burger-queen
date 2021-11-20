import React from 'react'
import styled from 'styled-components'

import MainButton from '../Main/components/MainButton'
import ListIcon from '../../../images/svg/clipboard-list-solid.svg'
import KitchenIcon from '../../../images/svg/store-solid.svg'

const MainDiv = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 25vh;
    height: fit-content;
    width: 95%;
`


export default function Main () {
    return(
        <MainDiv>
            <a href="/"><MainButton title="Order" icon={ListIcon}/></a>
            <MainButton title="Kitchen" icon={KitchenIcon}/>
        </MainDiv>
    )
}