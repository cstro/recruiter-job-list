import React from "react"
import { useSelector } from "react-redux"
import { selectFilteredJobs } from "../../selectors"
import JobListItem from "./JobListItem"

function JobList() {
  const jobs = useSelector(selectFilteredJobs)

  return (
    <ul>
      {jobs.map((job) => (
        <JobListItem key={job.key} job={job} />
      ))}
    </ul>
  )
}

export default JobList
