import React from "react"
import PropTypes from "prop-types"
import { getJobStatusColor, getJobStatusText } from "../../utils"

function JobStatusTag({ status }) {
  const text = getJobStatusText(status)
  const color = getJobStatusColor(status)

  return (
    <div
      data-test="job-status"
      className={`text-${color}-500 bg-${color}-100 border-${color}-200 text-xs py-0.5 px-2 rounded-md inline-block border`}
    >
      {text}
    </div>
  )
}

JobStatusTag.propTypes = {
  status: PropTypes.string.isRequired,
}

export default JobStatusTag
