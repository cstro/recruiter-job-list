export const statusIsSelected = (statusFilter, job) => statusFilter[job.status]

export const salaryRangeIsSelected = (salaryFilter, job) => {
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

export const recruiterRatingIsSelected = (ratingFilter, recruiter) => {
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
