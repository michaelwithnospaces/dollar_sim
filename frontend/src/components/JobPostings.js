import React, {useEffect, useState} from 'react'
const JobPostings = () => {
    const [jobPostings, setJobPostings] = useState([])

    const urlJobPostings = "http://localhost:8000/finance/allJobPostings"
    useEffect(() => {
        fetch(urlJobPostings)
        .then(response => response.json())
        .then(data => {
            setJobPostings(data)
        })
        .catch(error => console.log(error.message))  
    },[])

    return(
        <div>
            <ul>
                {jobPostings.map((jobPosting, i) => (
                    <div>
                        <p key = {i}>{jobPosting.title}</p>
                        <p key = {i}>{jobPosting.title}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default JobPostings;