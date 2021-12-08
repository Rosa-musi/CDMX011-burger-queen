import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin-left: 2.5%;
`
export const OrderDiv = styled.div`
    width: 30%;
    height: fit-content;
    border: solid 2px black;
    margin: 20px;
    border-radius: 15px;
    padding: 10px;
`
export const Text = styled.p`
    font-size: 18px;
    font-weight: ${props => props.bold ? "bold" : "unset"};
    padding: ${props => props.space ? "5px" : "0"};
`
export const Span = styled.span`
    font-weight: bold;
`
export const Separator = styled.div`
    width: 95%;
    height: 2px;
    color: black;
    background-color: black;
    margin: 15px 0;
`
export const LiDiv = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr 60px;
    width: 100%;
    height: fit-content;
    margin: 5px;
`
