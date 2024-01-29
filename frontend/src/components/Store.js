import styles from './store.module.css';
import React, {useState, useEffect} from 'react'
const Store = () => {
    const [potentialItems, setPotentialItems] = useState([])

    useEffect(() => {
        getPotentialItems();
    },[])

    const getPotentialItems = () => {
        fetch('http://localhost:8000/finance/allPotentialItems')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPotentialItems(data)
        })
        .catch(error => console.log(error.message)) 
    }

    return(
        <ul>
        {potentialItems.map((potentialItem, i) => (
            <div id = {styles.items} key = {i}>
                <h3>{potentialItem.itemName}</h3>
                <p>${potentialItem.price}</p>
                <img id={styles.pictures} height ="250px" src = {potentialItem.image} />
                {/* <button id={styles.purchaseButton}>Purchase</button> */}
            </div>
        ))}
    </ul>
    );
}

export default Store