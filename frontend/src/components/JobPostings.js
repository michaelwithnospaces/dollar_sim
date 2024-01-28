import styles from './JobPosting.module.css'
import React, {useEffect, useState} from 'react'
const JobPostings = () => {
    const [jobPostings, setJobPostings] = useState([])
    const [id, setID] = useState("");

    const urlJobPostings = "http://localhost:8000/finance/allJobPostings"

    const getJobPostings = () => {
        fetch(urlJobPostings)
        .then(response => response.json())
        .then(data => {
            setJobPostings(data)
        })
        .catch(error => console.log(error.message))       
    }

    useEffect(() => {
        getJobPostings();
    },[])

    const urlDelete = `http://localhost:8000/finance/deleteJobPosting/${id}`;
    const handleDelete = () => {
                fetch(urlDelete, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    getJobPostings();
                    return res.json();
                })
                .catch(error => console.log(error))
    }

    return(
        <div>
            <ul>
                {jobPostings.map((jobPosting, i) => (
                    <div>
                        <button id={styles.buttons} key = {i} onClick={() => {setID(jobPosting._id)}}>{jobPosting.title} ${jobPosting.salary}</button>
                    </div>
                ))}
            </ul>

            <button id={styles.deleteButton} onClick={handleDelete}>Delete Job</button>
        </div>
    );
}

export default JobPostings;