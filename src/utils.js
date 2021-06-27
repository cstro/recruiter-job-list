export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumSignificantDigits: 2,
    maximumSignificantDigits: 2,
  }).format(amount)

const jobStatusMap = {
  position_filled: {
    text: "Position filled",
    color: "green",
  },
  expired: {
    text: "Expired",
    color: "yellow",
  },
  closed: {
    text: "Closed",
    color: "pink",
  },
}

export const getJobStatusText = (status) => jobStatusMap[status]?.text ?? status

export const getJobStatusColor = (status) =>
  jobStatusMap[status]?.color ?? status
