// import styles from './jobPosting.module.css';
import React, {useEffect, useState} from 'react';

const JobPostingForm = () => {
    const [jobPostings, setJobPostings] = useState([])
    const [title, setTitle] = useState('')
    const [salary, setSalary] = useState()
    const [pin, setPin] = useState('1234')


    const urlDisplayJB = "http://localhost:8000/finance/allJobPostings";
    const getJobPosting = () => {
        fetch(urlDisplayJB)
        .then(response => response.json())
        .then(data => {
            setJobPostings(data)
        })
        .catch(error => console.log(error.message))            
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(pin == "1234"){
            const url = "http://localhost:8000/finance/newJobPosting";
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    salary: parseFloat(salary)
                })
            }).then(res => {
                return res.json()
            })
            .then(
                data => console.log(data),
                alert('Job Posting successful!'))
            .catch(error => console.log("ERROR"))            
        }
        else{
            alert("Invalid pin");
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Insert Title" onChange={(e) => {setTitle(e.target.value)}}></input>
                <input type="number" placeholder="Insert salary" onChange={(e) => {setSalary(e.target.value)}}></input>
                <input type="text" placeholder="Insert Pin" onChange = {(e) => {setPin(e.target.value)}}></input>
                <button type ="submit">Post</button> 
            </form>

            <ul>
                {jobPostings.map((jb, i) => (
                    <p key = {i}>{jb.title}</p>
                ))}
            </ul>
        </div>
    );
}

export default JobPostingForm;