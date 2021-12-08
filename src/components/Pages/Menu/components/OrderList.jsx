import React, {useContext} from 'react'
import styled from 'styled-components'

import colors from '../../../../styles/colors'
import { orderContext } from '../../../../context/OrderContext'

import plus from '../../../../images/svg/plus-circle-solid.svg'
import minus from '../../../../images/svg/minus-circle-solid.svg'
import trash from '../../../../images/svg/trash-alt-regular.svg'


const LiDiv = styled.div`
    display: grid;
    grid-template-columns: 60px 20px 1fr 60px 33px;
    width: 100%;
    height: fit-content;
    margin: 5px;
`
const PlusAddDiv = styled.div`
    width: 60px;
`
const Icon = styled.img`
    height: 23px;
    margin-left: ${props => props.marg ? "8px" : 0};
`
const OrderItem = styled.p`
    font-size: 18px;
    margin-left: ${props => props.marg ? "8px" : 0};
    font-weight: ${props => props.marg ? "bold" : "unset"};
`

export default function OrderList(props) {

    return(
        <li>
            <LiDiv>
                <PlusAddDiv>
                    <Icon src={plus} onClick={() => props.incrementOrder(props.id)}/>
                    <Icon src={minus} style={{marginLeft: "10px", visibility: props.cuantity <= 1 ? "hidden" : "visible"}} onClick={()=> props.decrementOrder(props.id)}/>
                </PlusAddDiv>
                <OrderItem marg>{props.cuantity}</OrderItem>
                <OrderItem style={{marginLeft: "10px"}}>{props.item}</OrderItem>
                <OrderItem>${props.price * props.cuantity}</OrderItem>
                <Icon src={trash} onClick={() => props.deleteItem(props.id)} marg/>
            </LiDiv>
        </li>
              
    
    )
}

