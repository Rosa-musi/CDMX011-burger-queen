import React, { useContext } from 'react'
import styled from 'styled-components'

import LuchDinnerButton from './components/LunchDinnerButton'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import OrderList from './components/OrderList'

import sandwichIcon from '../../../images/svg/sandwich.svg'
import hambIcon from '../../../images/svg/hamburger-solid.svg'
import colors from '../../../styles/colors'
import { orderContext } from '../../../context/OrderContext'

const Main = styled.main`
    display: flex;
    width: 95%;
    margin-left: 2.5%;
`
const MenuDiv = styled.div`
    width: 60%;
    height: fit-content;
`
const LunchDinnerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
`
const OrderDiv = styled.div`
    width: 40%;
    height: fit-content;
`
const Title = styled.h2`
    font-size: 30px;
    margin: 20px;
    width: fit-content;
    border-bottom: 3px solid ${colors.yellow};
`

const Menu = () => {

    const {customer, breakfast, setBreakfast, lunch, setLunch, orderItems} = useContext(orderContext);

    //cuando pulse breakfast o lunche por medio de propos hago que el style del componente sea flex y seteo el menu contrario a ""

    function handleBreakfast () {
        setBreakfast("flex")
        setLunch("none")
    }

    function handleLunch () {
        setBreakfast("none")
        setLunch("flex")
    }


    return(
        <Main>
            <MenuDiv>
                <LunchDinnerDiv>
                    <LuchDinnerButton handler={handleBreakfast} title="Breakfast" icon={sandwichIcon} />
                    <LuchDinnerButton handler={handleLunch} title="Lunch" icon={hambIcon} />
                </LunchDinnerDiv>
                <Breakfast on={breakfast}/>
                <Lunch on={lunch}/>
            </MenuDiv>
            <OrderDiv>
                <Title>{customer}</Title>
                <OrderList list={orderItems}/>
            </OrderDiv>

        </Main>
    )
    
}

export default Menu