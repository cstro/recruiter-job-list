import React from "react"
import { useSelector } from "react-redux"
import NoResults from "../../common/NoResults"
import { selectFilteredJobs } from "../../selectors"
import JobListItem from "./JobListItem"

function JobList() {
  const jobs = useSelector(selectFilteredJobs)

  return (
    <ul>
      {!jobs.length && <NoResults />}
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </ul>
  )
}

export default JobList
