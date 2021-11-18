import React from 'react'
import styled from 'styled-components'

import MainButton from '../Main/components/MainButton'
import ListIcon from '../../../../images/svg/clipboard-list-solid.svg'
import KitchenIcon from '../../../../images/svg/store-solid.svg'

const MainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20%;
    height: 100%;
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