import React from 'react'
import styled from 'styled-components'

import colors from '../../../styles/colors'

const ButtonG = styled.button`
    width: 125px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: ${colors.orange};
    color: ${colors.nude};
    font-size: 20px;
    cursor: pointer;
    visibility: hidden;
`

export default function Button(props){
    return(
        <ButtonG style={{visibility: props.visibility}} onClick={props.action}>{props.title}</ButtonG>
    )
    
}