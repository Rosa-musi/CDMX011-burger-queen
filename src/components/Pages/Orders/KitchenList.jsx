import React, { useContext, useEffect } from 'react'
import {db} from '../../../firebase/firebase-config'
import {collection, orderBy, onSnapshot, query, updateDoc, doc } from 'firebase/firestore'

import Button from '../Button/Button'

import {orderContext} from '../../../context/OrderContext'

import { LiDiv, Separator, Span, Text, OrderDiv, Main } from './styles/styles'



const KitchenList = () => {
    const {getOrders, setGetOrders} = useContext(orderContext);

    useEffect(() => {
        const q = query(collection(db, "orders"), orderBy("date", "asc"))
        onSnapshot(q, (querySnapshot) => {
            const orders = []
            querySnapshot.forEach((doc) =>{
                orders.push({id: doc.id, ...doc.data()})
            })
            setGetOrders(orders)
        })
    }, []);

    
    const updateStatus = async (id, status) => {
        await updateDoc(doc(db, 'orders', id), {
            status 
        })
    }
    
    
console.log(getOrders)
const ids = []
    getOrders.forEach((order,item) => {
        ids.push(<div key={item}>{order.id}</div>)
    })

    return(
        <Main>
            {getOrders.map((order, i) => {
                if(order.status == "pendant"){
                    return(
                        <OrderDiv key={i}>
                            <Text space><Span>Client: </Span>{order.client}</Text>
                            <Text space><Span>Waiter: </Span> {order.waiter}</Text>
                            <Text space><Span>Date: </Span> {order.date}</Text>
                            <Text space><Span>Status: </Span> {order.status}</Text>
                            <Separator/>
                            <Text space bold>Order:</Text>
                            <ol>
                                {order.order.map((itemOrder, ind) => {
                                    return(
                                        <li key={ind}>
                                            <LiDiv>
                                                <Text marg>{itemOrder.cuantity}</Text>
                                                <Text style={{marginLeft: "10px"}}>{itemOrder.item}</Text>
                                                <Text>${itemOrder.price * itemOrder.cuantity}</Text>
                                            </LiDiv>
                                        </li>
                                    )
                                })}
                            </ol>
                            <Button visibility="visible" action={()=>updateStatus(order.id, "ready")} title="ready"/>
                        </OrderDiv> 
                    )
                }
            })}
        </Main>
    )
    
}

export default KitchenList

