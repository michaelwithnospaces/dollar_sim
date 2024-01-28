import { useEffect, useState } from "react";
import styles from './transactions.module.css';

const Transactions = ({setBalance}) => {
    const [transactions, setTransactions] = useState([]);
    const [isTransactionLoaded, setIsTransactionLoaded] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/finance/allTransactions', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((dataJson) => {
            console.log(dataJson)
            let balance = 0;
            setIsTransactionLoaded(true)
            setTransactions(dataJson)
            dataJson.forEach(element => {
                balance += element.amount;
            });
            setBalance(balance);
        }).catch( (e) => console.log(e))
    },[])

    return (
        <div className="transactions">
            {!isTransactionLoaded && <p>Loading...</p>}
                return (
                    <div>
                        <ul>
                            {transactions.map((transaction, i) => (
                                <div><button id={styles.buttons} key = {i} >{transaction.category} {transaction.item} {transaction.amount}$</button></div>
                            ))}
                        </ul>
                    </div>
                );
        </div>
    );
}

export default Transactions;