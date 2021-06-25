import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { selectFilteredJobs } from "../jobsSlice"
import JobListItem from "./JobListItem"

function JobList({ recruiters }) {
  const jobs = useSelector(selectFilteredJobs)

  function getRecruiter(id) {
    return recruiters[id]
  }

  return (
    <ul>
      {jobs.map((job) => {
        const recruiter = getRecruiter(job.placed_by)
        return <JobListItem key={job.key} job={job} recruiter={recruiter} />
      })}
    </ul>
  )
}

JobList.propTypes = {
  recruiters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default JobList
