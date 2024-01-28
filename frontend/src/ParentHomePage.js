import { useState } from "react";
import { View, Button } from "react-native";

const ParentHomePage = ({ navigation }) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = () => {
        fetch('http://localhost:8000/finance/allTransactions').then(
            (response) => {
                return response.json();
            }
        ).then( jsonData => {
            console.log(jsonData)
            setTransactions(jsonData)
        }
        ).catch( e => {
            console.log(e);
        }
        )
    }

    return (
        <View>
            {transactions.map((transaction, i) => {
                <View key = {i}>
                    <Text> {transaction.id}</Text>
                    <Text> {transaction.category} </Text>
                </View>
            })}
            <Button title = "Press Here" onPress={() => {fetchTransactions()}}>
                Press here
            </Button>
        </View>
    );
};

export default ParentHomePage;