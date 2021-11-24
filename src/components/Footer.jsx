import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from '../styles/colors'
import Button from '../components/Pages/Button/Button'
import { orderContext } from '../context/OrderContext'

const FooterTag = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 100%;
`

const OuterSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 95%;
    height: 20px;
    border: solid black 3px;
`

const YellowLine = styled.span`
    width: 100%;
    height: 2px;
    border-top: solid 2px ${colors.yellow};
    margin: auto;
`

const OrangeLine = styled.div`
    width: 100%;
    height: 2px;
    border-top: solid 2px ${colors.orange};
    margin: auto;
`


const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 13px;
`
const Rights = styled.p`
    font-size: 15px;
    padding: 10px;
`

export default function Footer() {

    const { waiter, setWaiter, setCustomer } = useContext(orderContext)

    return(
        <FooterTag>
            <OuterSquare>
                <OrangeLine/>
                <YellowLine/>
            </OuterSquare>
            <FooterContent>
                <Rights>All rights reserved</Rights>
                <Link 
                    to="/takeOrder" 
                    style={{display: waiter === "" ? "none" : "flex"}}
                    onClick={()=>{
                        setWaiter("")
                        setCustomer("")
                    }}
                >
                    <Button title="log out"/>
                </Link>
            </FooterContent>
        </FooterTag>
       
    )
}