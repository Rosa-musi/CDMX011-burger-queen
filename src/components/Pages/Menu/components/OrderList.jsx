import React from 'react'
import styled from 'styled-components'

import colors from '../../../../styles/colors'

import plus from '../../../../images/svg/plus-circle-solid.svg'
import minus from '../../../../images/svg/minus-circle-solid.svg'
import trash from '../../../../images/svg/trash-alt-regular.svg'


const LiDiv = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr 60px 33px;
    width: 100%;
    height: fit-content;
    margin: 5px;
`
const PlusAddDiv = styled.div`
    width: 60px;
`
const Icon = styled.img`
    height: 23px;
`
const OrderItem = styled.p`
    font-size: 18px;
`

export default function OrderList({list}) {
    return(
        <ol>
            {list.map((item, index) => (
                <li key={index}>
                    <LiDiv>
                        <PlusAddDiv>
                            <Icon src={plus}/>
                            <Icon src={minus} style={{marginLeft: "10px"}}/>
                        </PlusAddDiv>
                        <OrderItem style={{marginLeft: "10px"}}>{item.item}</OrderItem>
                        <OrderItem>${item.price}</OrderItem>
                        <Icon src={trash}/>
                    </LiDiv>
                </li>
                ))}
        </ol>
    )
}

