import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { IoLocationSharp, IoCashSharp, IoPeopleSharp } from "react-icons/io5"
import { selectRecruiterById } from "../../selectors"
import StarRating from "../../common/StarRating"

const Formatters = {
  currency: (amount) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumSignificantDigits: 2,
      maximumSignificantDigits: 2,
    }).format(amount),
}

function JobListItemStatus({ status }) {
  let text
  let color

  switch (status) {
    case "position_filled":
      text = "Position filled"
      color = "green"
      break
    case "expired":
      text = "Expired"
      color = "yellow"
      break
    case "closed":
      text = "Closed"
      color = "pink"
      break
    default:
      text = status
      color = "gray"
  }

  return (
    <div
      data-test="job-status"
      className={`text-${color}-500 bg-${color}-100 border-${color}-200 text-xs py-0.5 px-2 rounded-md inline-block border`}
    >
      {text}
    </div>
  )
}

JobListItemStatus.propTypes = {
  status: PropTypes.string.isRequired,
}

function JobListItem({ job }) {
  const recruiter = useSelector((state) =>
    selectRecruiterById(state, job.placed_by)
  )

  return (
    <li
      className="bg-white rounded-sm p-6 shadow mb-6"
      data-test="job-list-item"
    >
      <JobListItemStatus status={job.status} />
      <h2 className="text-2xl mt-2 mb-6 text-gray-800 font-bold">
        {job.title}
      </h2>
      <div className="flex flex-row mb-4">
        <div>
          <div className="text-xs flex flex-row">
            <span className="text-gray-500 mr-2">Recruiter</span>
            <StarRating rating={recruiter.rating} />
          </div>
          <div className="flex flex-row items-center text-gray-700m">
            <IoPeopleSharp className="text-gray-500 mr-1" />
            {recruiter.name}
          </div>
        </div>
        <div className="ml-8">
          <div className="text-xs text-gray-500">Location</div>
          <div className="flex flex-row items-center text-gray-700m">
            <IoLocationSharp className="text-gray-500 mr-1" />
            {job.location}
          </div>
        </div>
        <div className="ml-8">
          <div className="text-xs text-gray-500">Salary</div>
          <div className="flex flex-row items-center text-gray-700m">
            <IoCashSharp className="text-gray-500 mr-1" />
            {job.salary !== null ? Formatters.currency(job.salary) : "-"}
          </div>
        </div>
      </div>
    </li>
  )
}

JobListItem.propTypes = {
  job: PropTypes.shape({
    status: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.number,
    placed_by: PropTypes.number,
  }).isRequired,
}

export default JobListItem
