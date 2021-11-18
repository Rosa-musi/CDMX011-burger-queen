import React from 'react'
import styled from 'styled-components'

import Main from '../Body/Pages/Main/Main'

const BodyTag = styled.body`
    height: fit-content;
`



export default function Body() {
    return(
        <BodyTag>
            <Main></Main>
        </BodyTag>
    )
}
