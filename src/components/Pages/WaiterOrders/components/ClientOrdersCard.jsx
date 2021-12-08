import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import Orders from './Orders'








const MainCard = styled.div`
    width: 20%;
    height: 200px;
    border: solid 2px black;
`

const Text = styled.p`
    font-size: 18px;
`

const ClientOrdersCard = (props) => {
  

    return(
        <MainCard>
            <Text>Client: {props.name}</Text>
            <Text>Waiter: {props.waiter}</Text>
        </MainCard>
    )
    
}

export default ClientOrdersCard