import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectFilteredJobs } from "./selectors"
import JobList from "./features/jobs/JobList"
import { storeJobs } from "./features/jobs/jobsSlice"
import { storeRecruiters } from "./features/recruiters/recruitersSlice"
import SearchFilters from "./features/filters/SearchFilters"
import rawData from "./data.json"

function App() {
  const jobs = useSelector(selectFilteredJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(storeJobs(rawData.jobs))
    dispatch(storeRecruiters(rawData.recruiters))
  }, [])

  return (
    <div className="flex p-8 bg-gray-50 min-h-screen">
      <SearchFilters />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">
            Search results:{" "}
            <span data-test="search-result-count">{jobs.length}</span>
          </span>
          <div>
            <span className="text-sm text-gray-500">Sort by</span>
            <select>
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
        <JobList />
      </div>
    </div>
  )
}

export default App
