import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectFilteredJobs } from "./jobsSlice"
import JobList from "./components/JobList"
import JobListFilters from "./components/JobListFilters"
import matchedJobs from "./data/matched_jobs.json"

const { recruiters } = matchedJobs

function App() {
  const jobs = useSelector(selectFilteredJobs)

  const [sortBy, setSortBy] = useState("salary-desc")
  const [status, setStatus] = useState(["position_filled", "expired", "closed"])

  // const jobs = rawJobs
  //   .filter((job) => status.includes(job.status))
  //   .sort((job1, job2) => {
  //     if (sortBy === "salary-desc") {
  //       return job1.salary > job2.salary ? -1 : 1
  //     }

  //     if (sortBy === "salary-asc") {
  //       return job1.salary > job2.salary ? 1 : -1
  //     }

  //     const recruiter1 = getRecruiter(job1.placed_by)
  //     const recruiter2 = getRecruiter(job2.placed_by)

  //     if (sortBy === "recruiter-desc") {
  //       return recruiter1.rating > recruiter2.rating ? -1 : 1
  //     }

  //     if (sortBy === "recruiter-asc") {
  //       return recruiter1.rating > recruiter2.rating ? 1 : -1
  //     }

  //     return 1
  //   })

  const updateSortBy = (event) => setSortBy(event.target.value)
  const handleStatusChange = (event) => {
    const name = event.target.value
    if (status.includes(name)) {
      return setStatus(status.filter((s) => s !== name))
    }

    return setStatus([...status, name])
  }

  return (
    <div className="flex p-8 bg-gray-50 min-h-screen">
      <JobListFilters
        selectedStatuses={status}
        onStatusesChange={handleStatusChange}
      />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Search results: {jobs.length}</span>
          <div>
            <span className="text-sm text-gray-500">Sort by</span>
            <select
              selected={sortBy}
              onBlur={updateSortBy}
              onChange={updateSortBy}
            >
              <option value="salary-desc">Salary (high - low)</option>
              <option value="salary-asc">Salary (low - high)</option>
              <option value="recruiter-desc">
                Recruiter rating (high - low)
              </option>
              <option value="recruiter-asc">
                Recruiter rating (low - high)
              </option>
            </select>
          </div>
        </div>
        <JobList jobs={jobs} recruiters={recruiters} />
      </div>
    </div>
  )
}

export default App
