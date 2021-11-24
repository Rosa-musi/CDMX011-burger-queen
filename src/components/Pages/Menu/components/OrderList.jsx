import React from 'react'
import styled from 'styled-components'

import colors from '../../../../styles/colors'

import plus from '../../../../images/svg/plus-circle-solid.svg'
import minus from '../../../../images/svg/minus-circle-solid.svg'
import trash from '../../../../images/svg/trash-alt-regular.svg'

const Icon = styled.img`
    height: 17px;
`
const Li = styled.li`
    
`

export default function OrderList({list}) {
    return(
        <ol>
            {list.map((item, index) => (
                <li key={index}><Icon src={plus}/><Icon src={minus} style={{marginLeft: "10px"}}/>{item}<Icon src={trash}/></li>
                ))}
        </ol>
    )
}