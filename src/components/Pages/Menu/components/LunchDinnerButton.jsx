import React from 'react'
import styled from 'styled-components'

const BorderButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 70px;
    border: solid black 2px;
    border-radius: 13px;
`

const TitleButton = styled.p`
    font-size: 25px;
    margin-bottom: 10px;
`

const IconButton = styled.img`
    height: 20px;
`

export default function MainButton({icon, title, handler, condRen}) {
    return(
        <BorderButton onClick={()=>handler()} style={{display: condRen}}>
            <TitleButton>{title}</TitleButton>
            <IconButton src={icon}/>
        </BorderButton>
    )
}