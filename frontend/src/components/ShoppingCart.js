import React, {useEffect, useState} from 'react';

const ShoppingCart = () => {
    const [webScrapedItems, setWebScrapedItems] = useState([])
    const [isLoadedWebScraped, setIsLoadedWebScraped] = useState(false)
    const [itemName, setItemName] = useState('')
    const getWebScrape = () => {
        fetch('http://127.0.0.1:8083/item/'+itemName)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setWebScrapedItems(data)
            setIsLoadedWebScraped(true)
        })
        .catch(error => console.log(error.message)) 
    }
    return(
        <div>
            <h1>Shopping-Cart</h1>
            <form onSubmit = {getWebScrape}>
                <input type="text" placeholder="Insert Title" onChange={(e) => {setItemName(e.target.value)}}></input>
                <button type ="submit">Search</button> 
            </form>
            {!isLoadedWebScraped && <p>loading...</p>}
            {webScrapedItems.map((item, i) =>
                (<div key = {i} className='shopping-item'>
                    <img src={item.image}></img>
                    <p>{item.price}</p>
                    <p>{item.itemName}</p>
                    <button><a href = {item.product_link} target = "_blank"  rel = "noopener noreferrer"></a></button>
                </div>))}
        </div>
    );
}

export default ShoppingCart; 