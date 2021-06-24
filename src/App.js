import React, { useState } from "react"
import JobListItem from "./components/JobListItem"
import matchedJobs from "./data/matched_jobs.json"

const { recruiters } = matchedJobs

const rawJobs = Object.entries(matchedJobs.jobs).map(([key, value]) => ({
  ...value,
  key,
}))

function App() {
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("salary-desc")

  function getRecruiter(id) {
    return recruiters[id]
  }

  const jobs = rawJobs
    .filter((job) => filter === "all" || parseInt(filter, 10) === job.placed_by)
    .sort((job1, job2) => {
      if (sortBy === "salary-desc") {
        return job1.salary > job2.salary ? -1 : 1
      }

      if (sortBy === "salary-asc") {
        return job1.salary > job2.salary ? 1 : -1
      }

      if (sortBy === "recruiter-desc") {
        const recruiter1 = getRecruiter(job1.placed_by)
        const recruiter2 = getRecruiter(job2.placed_by)
        return recruiter1.rating > recruiter2.rating ? -1 : 1
      }

      if (sortBy === "recruiter-asc") {
        const recruiter1 = getRecruiter(job1.placed_by)
        const recruiter2 = getRecruiter(job2.placed_by)
        return recruiter1.rating > recruiter2.rating ? 1 : -1
      }

      return 1
    })

  const updateFilter = (event) => setFilter(event.target.value)
  const updateSortBy = (event) => setSortBy(event.target.value)

  return (
    <div className="flex p-8 bg-gray-50 min-h-screen">
      <div className="px-8">
        <select selected={filter} onBlur={updateFilter} onChange={updateFilter}>
          <option value="all">Show all</option>
          {Object.entries(recruiters).map(([id, recruiter]) => (
            <option key={id} value={id}>
              {recruiter.name}
            </option>
          ))}
        </select>

        <div>Recruiter rating</div>
        <div>Salary</div>
        <div>Location</div>
      </div>

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
        <ul>
          {jobs.map((job) => {
            const recruiter = getRecruiter(job.placed_by)
            return <JobListItem key={job.key} job={job} recruiter={recruiter} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
