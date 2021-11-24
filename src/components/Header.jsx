import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from '../styles/colors'
import Button from './Pages/Button/Button'
import icon from '../images/svg/logo.jpg'
import arrow from '../images/svg/arrow-right-solid.svg'
import { orderContext } from '../context/OrderContext'

const BqHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    padding: 10px;
`
const MainHeader = styled.div`
    display: flex;
    width: 95%;
    height: fit-content;
`
const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    width: 50%;
`
const Logo = styled.img`
    height: 60px;
    margin: 8px;
`
const Title = styled.h1`
    font-size: 40px;
    margin-left: 20px;
    margin-right: 20px;
`

const CapLetTitle = styled.span`
    color: ${colors.yellow};
`

const ArrowImg = styled.img`
    height: 30px;
`

const MenuDiv = styled.div`
    display: flex;
    height: fit-content;
    width: 50%;
    align-items: center;
    align-self: flex-end;
    padding: 20px;
`
const WaiterNameDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: fit-content;
`
const WaiterName = styled.p`
    font-size: 30px;
    font-weight: bold;
`
const ReadyOrderMessege = styled.div`
    width: 25px;
    height: 25px;
    border: 2px solid black;
    border-radius: 50px;
    margin-right: 15px;
    background-color: ${colors.green};
`
const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-left: 15px;
`
const Separator = styled.span`
    width: 95%;
    height: 2px;
    background-color: ${colors.black};
    margin: auto;
`
export default function Header () {

    const { waiter, setWaiter } = useContext(orderContext)
   console.log(window.location)
    return (
        <BqHeader>
            <MainHeader>
                <TitleDiv>
                    <Link to="/"><Logo src={icon}/></Link>
                    <Title><CapLetTitle>B</CapLetTitle>urger <CapLetTitle>Q</CapLetTitle>ueen</Title>
                    <ArrowImg src={arrow}/>
                </TitleDiv>
                <MenuDiv
                    style={{display: waiter === "" ? "none" : "flex"}}
                >
                    <WaiterNameDiv>
                        <ReadyOrderMessege></ReadyOrderMessege>
                        <WaiterName>{waiter}</WaiterName>
                    </WaiterNameDiv>
                    <ButtonsDiv>
                        <Link to="/orders"><Button title="orders"/></Link>
                        <Link to="/menu"  /* style={{visibility: window.location.href === window.location.origin + "/orders" ? 'visible' : 'hidden' } }*/
                        ><Button title="menu"/></Link> 
                    </ButtonsDiv>
                </MenuDiv>
            </MainHeader>
            <Separator/>
        </BqHeader>
    )
}