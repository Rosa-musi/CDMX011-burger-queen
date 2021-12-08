import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import colors from '../../../styles/colors'
import { orderContext } from '../../../context/OrderContext'

const Main = styled.main`
    display: flex;
    width: 95%;
    padding-top: 10%;
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
`
const OptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
`
const Title = styled.h2`
    font-size: 30px;
    margin: 20px;
    border-bottom: 3px solid ${colors.yellow};
`

const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
`
const SelectWaiter = styled.select`
    margin: 20px;
    background-color: #FFF8ED;
    border-radius: 10px;
    width: 200px;
    height: 30px;
    border: 1px solid black;
`

const InputCustomer = styled.input`
    margin: 20px;
    background-color: #FFF8ED;
    border-radius: 10px;
    width: 200px;
    height: 25px;
    font-size: 15px;
    border: 1px solid black;
`
const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
`
const CustomersName = styled.p`
    font-size: 30px;
    margin: 20px;
    font-weight: bold;
    margin: 20px 0 30%;
`
const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export default function TakeOrder () {

    const { waiter, setWaiter, customer, setCustomer } = useContext(orderContext)

    function handleChangeWaiter (e) {
        const { value } = e.target;
        setWaiter(value)
    }

    function handleChangeCustomer (e) {
        const { value } = e.target;
        setCustomer(value)
    }

    function goToMenu () {
        if (waiter == "" || customer == ""){
            alert("Enter waiter and customer's name please")
        } 
    }

    function restartOrder () {
        setCustomer("")
    }

    return (
        <Main>
            <InputDiv>
                <Title>Create order</Title>
                <OptionsDiv> 
                    <Label htmlFor="waiter">Waiter
                        <SelectWaiter name="waiter" id="waiter" onChange={handleChangeWaiter} value={waiter}>
                            <option value="Juan">Juan</option>
                            <option value="Rosa">Rosa</option>
                            <option value="Vania">Vania</option>
                            <option value="Felipe">Felipe</option>
                        </SelectWaiter>
                    </Label> 
                    <Label htmlFor="cName">Customer's name
                        <InputCustomer type="text" id="cName" value={customer} onChange={handleChangeCustomer}/>
                    </Label>
                </OptionsDiv>
            </InputDiv>
            <DataDiv>
                <Title>Customer's name:</Title>
                <CustomersName>{customer}</CustomersName>
                <ButtonsDiv>
                    <Link 
                        to={waiter == "" || customer == "" ? "/takeOrder" : "/menu"}
                        onClick={goToMenu}
                    >
                        <Button title="create" visibility="visible" />
                    </Link>
                    <Button title="delete" action={restartOrder} visibility="visible"/>
                </ButtonsDiv>
            </DataDiv>
        </Main>
    )
}