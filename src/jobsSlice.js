import { createSlice } from "@reduxjs/toolkit"
import { jobs as jobsByKey } from "./data/matched_jobs.json"
import { selectRecruiterById } from "./recruitersSlice"

const jobs = Object.entries(jobsByKey).map(([key, job]) => ({ ...job, key }))

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: jobs,
    filters: {
      status: {
        position_filled: true,
        expired: true,
        closed: true,
      },
      salary: {
        unknown: true,
        under_30: true,
        between_30_45: true,
        over_45: true,
      },
      rating: {
        five_star: true,
        four_star: true,
        three_star: true,
      },
    },
    sortBy: null,
  },
  reducers: {
    toggleSalaryFilter: (state, action) => {
      state.filters.salary[action.payload] =
        !state.filters.salary[action.payload]
    },
    toggleStatusFilter: (state, action) => {
      state.filters.status[action.payload] =
        !state.filters.status[action.payload]
    },
    toggleRatingFilter: (state, action) => {
      state.filters.rating[action.payload] =
        !state.filters.rating[action.payload]
    },
  },
})

export const { toggleSalaryFilter, toggleStatusFilter, toggleRatingFilter } =
  jobsSlice.actions

// function sort(jobs, sortBy) {
//   return jobs.sort((job1, job2) => {
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
// }

const statusIsSelected = (statusFilter, job) => statusFilter[job.status]

const salaryRangeIsSelected = (salaryFilter, job) => {
  const { salary } = job

  // Sometimes jobs don't have a salary, so we need an exception to handle that.
  if (salaryFilter.unknown && salary === null) {
    return true
  }
  if (salaryFilter.under_30 && salary < 30000) {
    return true
  }
  if (salaryFilter.between_30_45 && salary >= 30000 && salary < 45000) {
    return true
  }
  if (salaryFilter.over_45 && salary >= 45000) {
    return true
  }

  return false
}

const recruiterRatingIsSelected = (ratingFilter, recruiter) => {
  if (ratingFilter.five_star && recruiter.rating === 5) {
    return true
  }

  if (ratingFilter.four_star && recruiter.rating === 4) {
    return true
  }

  if (ratingFilter.three_star && recruiter.rating === 3) {
    return true
  }

  return false
}

export const selectFilteredJobs = (state) => {
  const {
    status: statusFilter,
    salary: salaryFilter,
    rating: ratingFilter,
  } = state.jobs.filters

  return state.jobs.allJobs.filter((job) => {
    const recruiter = selectRecruiterById(state, job.placed_by)

    return (
      statusIsSelected(statusFilter, job) &&
      salaryRangeIsSelected(salaryFilter, job) &&
      recruiterRatingIsSelected(ratingFilter, recruiter)
    )
  })
}

export default jobsSlice.reducer
