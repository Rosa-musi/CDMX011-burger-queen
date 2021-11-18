import React from 'react'
import styled from 'styled-components'

import icon from '../images/svg/logo.jpg'
import arrow from '../images/svg/arrow-right-solid.svg'

const BqHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 10px;
`
const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    
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
    color: #F2CB05;
`

const ArrowImg = styled.img`
    height: 30px;
`

const Separator = styled.span`
    width: 95%;
    height: 2px;
    background-color: black;
    margin: auto;
`

export default function Header () {
    return (
        <BqHeader>
            <TitleDiv>
                <Logo src={icon}/>
                <Title><CapLetTitle>B</CapLetTitle>urger <CapLetTitle>Q</CapLetTitle>ueen</Title>
                <ArrowImg src={arrow}/>
            </TitleDiv>
            <Separator/>
        </BqHeader>
    )
}