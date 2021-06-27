export const statusIsSelected = (statusFilter, job) => statusFilter[job.status]

export const salaryRangeIsSelected = (salaryFilter, job) => {
  const { salary } = job

  // Sometimes jobs don't have a salary, so we need an exception to handle that.
  // We abort early so it doesn't match on "under 30".
  if (salary === null) {
    return salaryFilter.unknown
  }

  return Boolean(
    (salaryFilter.under_30 && salary < 30000) ||
      (salaryFilter.between_30_45 && salary >= 30000 && salary < 45000) ||
      (salaryFilter.over_45 && salary >= 45000)
  )
}

export const recruiterRatingIsSelected = (ratingFilter, recruiter) => {
  const { rating } = recruiter

  return Boolean(
    (ratingFilter.five_star && rating === 5) ||
      (ratingFilter.four_star && rating === 4) ||
      (ratingFilter.three_star && rating === 3)
  )
}
