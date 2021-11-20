import React, {createContext, useState, useEffect } from 'react'

export const orderContext = createContext();

export const OrderProvider = (props) => {

    // Waiter
    const [waiter, setWaiter] = useState("");

    // Customer's name
    const [customer, setCustomer] = useState("");

    console.log(waiter)
  
    return (
        <orderContext.Provider value={{waiter, setWaiter,customer, setCustomer}}>
            {props.children}
        </orderContext.Provider>
    )
}