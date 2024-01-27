const express = require('express')
const router = express.Router()
module.exports = router
const Transaction = require('../model/transactionsModel')

router.get('/allTransactions', async (req, res) => {
    try {
        const transactions = await Transaction.find({})
        res.status(200).json(transactions)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})

router.post('/newTransaction', async (req,res) => {
    const transaction = new Transaction({
        category: req.body.category,
        item: req.body.item,
        amount: req.body.amount,
        date: req.body.date
    })
    try {
        const newTransaction = await transaction.save()
        res.status(201).json(newTransaction) //201 -> created something successfully
    } catch (error) {
        res.status(400).json({message: err.message}) //error 400: something wrong on user end such as bad data or unfilled data
    }
})