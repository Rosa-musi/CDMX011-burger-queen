import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const FooterTag = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
`

const OuterSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 95%;
    height: 20px;
    border: solid black 3px;
    margin: auto;
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

const Rights = styled.p`
    font-size: 15px;
    padding: 10px;

`

export default function Footer() {
    return(
        <FooterTag>
            <OuterSquare>
                <OrangeLine/>
                <YellowLine/>
            </OuterSquare>
            <Rights>All rights reserved - made by Rosa Arellano</Rights>
        </FooterTag>
       
    )
}