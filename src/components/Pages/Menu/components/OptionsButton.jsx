import React from 'react'
import styled from 'styled-components'

import colors from '../../../../styles/colors'

const BorderButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 60px;
    border: solid black 2px;
    border-radius: 13px;
    background-color: ${colors.nude};
    margin: 10px;
    padding: 5px;
`

const TitleButton = styled.p`
    font-size: 15px;
`


export default function OptionsButton({title, price, handler}) {
    return(
        <BorderButton onClick={(handler)}>
            <TitleButton>{title}</TitleButton>
            <TitleButton style={{marginTop: "10px"}}>{price}</TitleButton>
        </BorderButton>
    )
}