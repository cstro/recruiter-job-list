import { TiLocationOutline, TiCreditCard, TiStarFullOutline } from "react-icons/ti";

const Formatters = {
  currency: (amount) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumSignificantDigits: 2, maximumSignificantDigits: 2 }).format(amount),
}

function JobListItemStatus ({ status }) {
  let text
  let color

  switch (status) {
    case 'position_filled':
      text = 'Position filled'
      color = 'green'
      break
    case 'expired':
      text = 'Expired'
      color = 'yellow'
      break
    case 'closed':
      text = 'Closed'
      color = 'pink'
      break
    default:
      text = status
      color = 'gray'

  }

  return (
    <div className={`text-${color}-500 bg-${color}-100 border-${color}-200 text-xs py-0.5 px-2 rounded-md inline-block border`}>{text}</div>
  )
}

function JobListItem ({ job, recruiter}) {
  return (
    <li className="bg-white rounded-sm p-6 shadow mb-6">
      <JobListItemStatus status={job.status} />
      <h2 className="text-2xl my-2 text-gray-800 font-bold">{job.title}</h2>
      <div className="flex flex-row mb-4">
        <div className="flex flex-row items-center text-gray-700m"><TiLocationOutline className="text-gray-500 mr-1" />{job.location}</div>
        {job.salary && <div className="flex flex-row items-center text-gray-700m ml-6"><TiCreditCard className="text-gray-500 mr-1" />{Formatters.currency(job.salary)}/year</div>}
      </div>

        <div className="mb-2">
          <div className="text-xs text-gray-500">Recruiter</div>
          <div className="flex flex-row items-center">
            <div className="mr-2">{recruiter.name}</div>
            <div class="flex flex-row items-center">
              {Array(recruiter.rating).fill(0).map(() => <TiStarFullOutline className="inline-block text-yellow-300" />)}
              {Array(5 - recruiter.rating).fill(0).map(() => <TiStarFullOutline className="inline-block text-gray-300" />)}
            </div>
          </div>
        </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-gray-500">Live jobs</div>
          {recruiter.live_job_count}
        </div>
        <div>
          <div className="text-xs text-gray-500">Filled jobs</div>
          {recruiter.filled_job_count}
        </div>
      </div>
    </li>
  )
}

export default JobListItem
