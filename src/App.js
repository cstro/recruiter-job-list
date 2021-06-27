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
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex max-w-4xl m-auto">
        <SearchFilters />
        <div className="flex-1">
          <div className="mb-4">
            <span className="font-bold">
              Search results:{" "}
              <span data-test="search-result-count">{jobs.length}</span>
            </span>
          </div>
          <JobList />
        </div>
      </div>
    </div>
  )
}

export default App
