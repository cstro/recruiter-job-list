import {
  statusIsSelected,
  salaryRangeIsSelected,
  recruiterRatingIsSelected,
} from "./utils"

export const selectRecruiterById = (state, id) =>
  state.recruiters.recruitersById[id]

export const selectFilteredJobs = (state) => {
  const {
    status: statusFilter,
    salary: salaryFilter,
    rating: ratingFilter,
  } = state.filters

  return state.jobs.allJobs.filter((job) => {
    const recruiter = selectRecruiterById(state, job.placed_by)

    return (
      statusIsSelected(statusFilter, job) &&
      salaryRangeIsSelected(salaryFilter, job) &&
      recruiterRatingIsSelected(ratingFilter, recruiter)
    )
  })
}
