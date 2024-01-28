import { useEffect, useState } from "react";

const Transactions = ({setBalance}) => {
    const [transactions, setTransactions] = useState([]);
    const [isTransactionLoaded, setIsTransactionLoaded] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:8000/finance/allTransactions')
        .then((response) => response.json())
        .then((dataJson) => {
            let balance = 0;
            setIsTransactionLoaded(true)
            setTransactions(dataJson)
            dataJson.forEach(element => {
                balance += element.amount;
            });
            setBalance(balance);
        }).catch( (e) => console.log(e))
    },[])
    console.log()
    return (
        <div className="transactions">
            {!isTransactionLoaded && <p>Loading...</p>}
            {transactions.map((transaction) => {
                return (
                    <div id = {transaction.id}>
                        <p>{transaction.category}</p>
                        <p>{transaction.item}</p>
                        <p>{transaction.amount}</p>
                        <p>{transaction.date}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Transactions;