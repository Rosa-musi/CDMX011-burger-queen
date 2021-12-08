import React, {createContext, useState, useEffect } from 'react'

export const orderContext = createContext();

export const OrderProvider = (props) => {

    //visivility of menu and order buttons
    const [menuBut, setMenuBut] = useState("hidden")
    const [orderBut, setOrderBut] = useState("visible")

    // Waiter
    const [waiter, setWaiter] = useState("");

    // Customer's name
    const [customer, setCustomer] = useState("");

    // Handle menu (Lunch or breakfast)
    const [lunch, setLunch] = useState("");
    const [breakfast, setBreakfast] = useState("")
  

    // Order items
    const [orderItems, setOrderItems] = useState([])

    // Total
    const [total, setTotal] = useState(0)


    

    function deleteItem (id) {
        setOrderItems(orderItems.filter(item => item !== orderItems[orderItems.findIndex(element => element.id == id)]))
    }

    const incrementOrder = (id) => {
        const exist = orderItems[orderItems.findIndex(element => element.id == id)]
        setOrderItems(
            orderItems.map ((x) =>
                x.id === id ? {...exist, cuantity: exist.cuantity + 1} : x 
            ) //primero mapeas los que ya existen y si encuentra el que buscas, primero lo trae y después lo modifica
        )
    }
 
    const decrementOrder = (id) => {
        const exist = orderItems[orderItems.findIndex(element => element.id == id)]
        setOrderItems(
            orderItems.map ((x) =>
                x.id === id ? {...exist, cuantity: exist.cuantity - 1} : x
            )
        )
    }


    useEffect(() => {
        setTotal(orderItems.reduce((sum, value) => (sum + value.price * value.cuantity ), 0))  //el cero es valor inicial
    },[orderItems])

    // set order in firestore
    const [getOrders, setGetOrders] = useState([])

    // Ready Orders
    const [ready, setReady] = useState("")
    
    useEffect(() => {
        console.log(waiter)
        const getReady = () => {
            let put = []
            getOrders.map((item) => {
                if(item.waiter === waiter) {
                    console.log(item.waiter)
                    if(item.status === "ready") {
                        put.push(item.status)
                    }
                }
            })
            console.log(put)
            setReady(put.length)
        }
        getReady()
    }, [waiter, getOrders])


    return (
        <orderContext.Provider value={{
        waiter, 
        setWaiter,
        customer, 
        setCustomer, 
        breakfast, 
        setBreakfast, 
        lunch, 
        setLunch, 
        orderItems, 
        setOrderItems,
        total,
        setTotal,
        deleteItem,
        incrementOrder,
        decrementOrder,
        menuBut, 
        setMenuBut,
        orderBut, 
        setOrderBut,
        getOrders,
        setGetOrders,
        ready
        }}>
            {props.children}
        </orderContext.Provider>
    )
}