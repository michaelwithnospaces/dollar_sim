import { useEffect, useState } from "react";
import styles from './transactions.module.css';

const Transactions = ({setBalance}) => {
    const [transactions, setTransactions] = useState([]);
    const [isTransactionLoaded, setIsTransactionLoaded] = useState(false);
    const [pin, setPin] = useState('1234')
    const [category, setCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [amount, setAmount] = useState();
    const [isTransactionStarted, setIsTransactionStarted] = useState(false);
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

    const getTransactions = () => {
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
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        if(pin == "1234"){
            const url = "http://localhost:8000/finance/newTransaction";
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category: category,
                    item: itemName,
                    amount: parseFloat(amount)
                })
            }).then(res => {
                getTransactions();
                return res.json()
            })
            .then(
                data => console.log(data),
                alert('Transaction successful!'))
            .catch(error => console.log("ERROR"))            
        }
        else{
            alert("Invalid pin");
        }
    } 

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
                        {!isTransactionStarted && <button id={styles.startTransButton} onClick={()=>{setIsTransactionStarted(true)}}>Start Transaction</button>}
                        {isTransactionStarted && <form>
                                <input style={{height: "30px", fontSize:"20px"}} type = "string" placeholder="Insert category" onChange={(e) => {setCategory(e.target.value)}}></input>
                                <input style={{height: "30px", fontSize:"20px"}} type = "string" placeholder="Insert item name" onChange={(e) => {setItemName(e.target.value)}}></input>
                                <input style={{height: "30px", fontSize:"20px"}} type = "number" placeholder="Insert amount" onChange={(e) => {setAmount(e.target.value)}}></input>
                                <input style={{height: "30px", fontSize:"20px"}} type = "string" placeholder="Insert pin" onChange={(e) => {setPin(e.target.value)}}></input>
                                <button style={{height: "40px", fontSize:"20px"}} onClick={handleAdd}>Add Transaction</button> 
                            </form>
                        }
                    </div>
                );
        </div>
    );
}

export default Transactions;