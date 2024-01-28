import styles from './jobPosting.module.css';
import React, {useEffect, useState} from 'react';

const JobPostings = () => {
    const [jobPostings, setJobPostings] = useState([])
    const [title, setTitle] = useState('')
    const [salary, setSalary] = useState()

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

        const url = "http://localhost:8000/finance/newJobPosting";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                salary: salary
            })
        }).then(res => {
            getNotes()
            return res.json()
        })
        .then(
            data => console.log(data),
            alert('Job Posting successful!'))
        .catch(error => console.log("ERROR"))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <textarea placeholder='Insert Title here...' value ={title} onChange={(e) => {setTitle(e.target.value)}} className = "titleBox" id={styles.title} rows="3" cols="90"></textarea>
                <textarea placeholder = 'Start your note...' value ={salary} onChange={(e) => {setSalary(e.target.value)}} id={styles.salary} rows="44" cols="90"></textarea>
                <button type ="submit" id={styles.postButton}>Post</button> 
            </form>

            <ul>
                {jobPostings.map((jb, i) => (
                    <p key = {i}>{jb.title}</p>
                ))}
            </ul>
        </div>
    );
}

export default JobPostings;