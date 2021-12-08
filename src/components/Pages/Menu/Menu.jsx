import React, { useContext } from 'react'
import styled from 'styled-components'
import {db} from '../../../firebase/firebase-config'
import {collection, addDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

import LuchDinnerButton from './components/LunchDinnerButton'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import OrderList from './components/OrderList'
import Button from '../Button/Button'

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
const Separator = styled.div`
    width: 95%;
    height: 2px;
    color: black;
    background-color: black;
    margin: 15px 0;
`
const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
`
const Total = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const HandleOrderList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: fit-content;
    margin: 40px 15px;
`

const Menu = () => {

    const {customer, setCustomer, breakfast, setBreakfast, lunch, setLunch, total, orderItems, setOrderItems, deleteItem, incrementOrder, decrementOrder, waiter} = useContext(orderContext);

    function handleBreakfast () {
        setBreakfast("flex")
        setLunch("none")
    }

    function handleLunch () {
        setBreakfast("none")
        setLunch("flex")
    }

    const saveOrder = (client, waiter, date, order) => {
        addDoc(collection(db, "orders"), {
            client,
            waiter,
            date,
            status: "pendant",
            order,
        })
        setCustomer("")
    }

    const today = new Date()
    const dateToday = today.toDateString();

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
                <ol>
                    {orderItems.map(item =>{
                        return <OrderList incrementOrder={incrementOrder} decrementOrder={decrementOrder} deleteItem={deleteItem} key={item.id} id={item.id} cuantity={item.cuantity} item={item.item} price={item.price} />
                    })}
                </ol>
                <Separator/>
                <TotalDiv>
                    <Total>Total</Total>
                    <Total>${total}</Total>
                </TotalDiv>
                <HandleOrderList>
                    <Link to="/takeOrder"><Button title="send" action={()=>saveOrder(customer, waiter, dateToday, orderItems )} visibility="visible"/></Link>
                    <Button title="delete" action={() => setOrderItems([])} visibility="visible"/>
                </HandleOrderList>
            </OrderDiv>

        </Main>
    )
    
}

export default Menu