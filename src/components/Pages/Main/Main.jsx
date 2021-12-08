import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import MainButton from '../Main/components/MainButton'
import ListIcon from '../../../images/svg/clipboard-list-solid.svg'
import KitchenIcon from '../../../images/svg/store-solid.svg'

import {orderContext} from '../../../context/OrderContext'


const MainDiv = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 25vh;
    height: fit-content;
    width: 95%;
`


export default function Main () {

    const {setOrderBut, setMenuBut} = useContext(orderContext);

    const handleOrderButton = () => {
        setOrderBut("visible")
        setMenuBut("hidden")
    }

    return(
        <MainDiv>
            <Link to="/takeOrder" onClick={handleOrderButton}><MainButton title="Order" icon={ListIcon} /></Link>
            <Link to="/kitchenList"><MainButton title="Kitchen" icon={KitchenIcon}/></Link>
        </MainDiv>
    )
}