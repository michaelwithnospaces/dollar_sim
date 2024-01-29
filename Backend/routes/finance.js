const express = require('express')
const router = express.Router()
module.exports = router
const Transaction = require('../model/transactionsModel')
const JobPosting = require('../model/jobPostingsModel')
const ConfirmedItem = require('../model/confirmedItemsModel')
const PotentialItem = require('../model/potentialItemsModel')

router.all('/*', (req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type"); //needed to include the "Content-Type since that's what you used in the fetch POST function - these parameters trigger a preflight request from cors, so that's why you include them."
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
})

//Transaction page endpoints: GET and POST
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
        amount: req.body.amount
    })
    try {
        const newTransaction = await transaction.save()
        res.status(201).json(newTransaction) //201 -> created something successfully
    } catch (error) {
        res.status(400).json({message: err.message}) //error 400: something wrong on user end such as bad data or unfilled data
    }
})

//Job Postings Endpoints: GET, POST, DELETE
router.get('/allJobPostings', async (req, res) => {
    try {
        const jobPostings = await JobPosting.find({})
        res.status(200).json(jobPostings)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})

router.post('/newJobPosting', async (req,res) => {
    const jobPosting = new JobPosting({
        title: req.body.title,
        salary: req.body.salary
    })
    try {
        const newJobPosting = await jobPosting.save()
        res.status(201).json(newJobPosting) //201 -> created something successfully
    } catch (error) {
        res.status(400).json({message: err.message}) //error 400: something wrong on user end such as bad data or unfilled data
    }
})

router.delete('/deleteJobPosting/:id', async (req, res) => {
    try {
        const jobPostingQuery = JobPosting.findById(req.params.id)
        const jobPosting = await JobPosting.findOneAndDelete(jobPostingQuery,{
            new: true
        })
        res.status(200).json(jobPosting)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//PotentialItems endpoints: GET, POST, DELETE
router.get('/allPotentialItems', async (req, res) => {
    try {
        const potentialItems = await PotentialItem.find({})
        res.status(200).json(potentialItems)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})

router.post('/newPotentialItem', async (req,res) => {
    const potentialItem = new PotentialItem({
        itemName: req.body.itemName,
        price: req.body.price,
        image: req.body.image
    })
    try {
        const newPotentialItem = await potentialItem.save()
        res.status(201).json(newPotentialItem) //201 -> created something successfully
    } catch (error) {
        res.status(400).json({message: err.message}) //error 400: something wrong on user end such as bad data or unfilled data
    }
})

router.delete('/deletePotentialItem/:id', async (req, res) => {
    try {
        const potentialItemQuery = PotentialItem.findById(req.params.id)
        const potentialItem = await PotentialItem.findOneAndDelete(potentialItemQuery,{
            new: true
        })
        res.status(200).json(potentialItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//ConfirmedItemsForPurcharse endpoints: GET, POST, DELETE

router.get('/allConfirmedItems', async (req, res) => {
    try {
        const confirmItems = await ConfirmedItem.find({})
        res.status(200).json(confirmItems)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})

router.post('/newConfirmedItem', async (req,res) => {
    const confirmedItem = new ConfirmedItem({
        itemName: req.body.itemName,
        price: req.body.price,
        image: req.body.image,
        purchased: req.body.purchased
    })
    try {
        const newConfirmedItem = await confirmedItem.save()
        res.status(201).json(newConfirmedItem) //201 -> created something successfully
    } catch (error) {
        res.status(400).json({message: err.message}) //error 400: something wrong on user end such as bad data or unfilled data
    }
})

router.delete('/deleteConfirmedItem/:id', async (req, res) => {
    try {
        const confirmedItemQuery = ConfirmedItem.findById(req.params.id)
        const confirmItem = await ConfirmedItem.findOneAndDelete(confirmedItemQuery,{
            new: true
        })
        res.status(200).json(confirmItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
