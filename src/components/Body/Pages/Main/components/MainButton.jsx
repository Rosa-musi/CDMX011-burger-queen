import React from 'react'
import styled from 'styled-components'



const BorderButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 120px;
    border: solid black 2px;
    border-radius: 13px;
`

const TitleButton = styled.p`
    font-size: 35px;
    margin-bottom: 10px;
`

const IconButton = styled.img`
    height: 35px;
`

export default function MainButton(props) {
    return(
        <BorderButton>
            <TitleButton>{props.title}</TitleButton>
            <IconButton src={props.icon}/>
        </BorderButton>
    )
}
