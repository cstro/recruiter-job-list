import {useState} from 'react'
import './App.css';
import matchedJobs from './data/matched_jobs.json'

const { recruiters } = matchedJobs

const jobs = Object.entries(matchedJobs.jobs).map(([key, value]) => (
  {
    ...value,
    key
  }
))

const currency = (amount) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumSignificantDigits: 2, maximumSignificantDigits: 2 }).format(amount)
const Formatters = {
  currency,
}

function JobSalary({ amount }) {
  return amount ? <div>{Formatters.currency(amount)}</div> : null
}

function App() {
  const [filter, setFilter] = useState('all')

  function getRecruiter(id) {
    return recruiters[id]
  }

  function filteredJobs () {
    if (filter === 'all') {
      return jobs
    }

    return jobs.filter((job) => parseInt(filter) === job.placed_by)
  }

  return (
    <div className="App">
      <div>
        Sidebar
      </div>

      <select selected={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value={'all'}>Show all</option>
        {Object.entries(recruiters).map(([id, recruiter]) => <option value={id}>{recruiter.name}</option>)}
      </select>

      <h1>Job list</h1>

      <ul>
        {filteredJobs().map((job) => {
          const recruiter = getRecruiter(job.placed_by)

          return (
          <li key={job.key}>
            <h2>{job.title}</h2>
            <h3>{job.location}</h3>
            <JobSalary amount={job.salary} />
            <div>Status: {job.status}</div>
            <div>{recruiter.name}</div>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
