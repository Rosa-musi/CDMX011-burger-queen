import React, {createContext, useState, useEffect } from 'react'

export const orderContext = createContext();

export const OrderProvider = (props) => {

    // Waiter
    const [waiter, setWaiter] = useState("");

    // Customer's name
    const [customer, setCustomer] = useState("");

    // Handle menu (Lunch or breakfast)
    const [lunch, setLunch] = useState("");
    const [breakfast, setBreakfast] = useState("")

    // Order items
    const [orderItems, setOrderItems] = useState([])

    console.log(waiter)
  
    return (
        <orderContext.Provider value={{waiter, setWaiter,customer, setCustomer, breakfast, setBreakfast, lunch, setLunch, orderItems, setOrderItems}}>
            {props.children}
        </orderContext.Provider>
    )
}