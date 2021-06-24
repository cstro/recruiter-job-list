import {useState} from 'react'
import JobListItem from './components/JobListItem'
import matchedJobs from './data/matched_jobs.json'

const { recruiters } = matchedJobs

const jobs = Object.entries(matchedJobs.jobs).map(([key, value]) => (
  {
    ...value,
    key
  }
))

function App() {
  const [filter, setFilter] = useState('all')

  function getRecruiter(id) {
    return recruiters[id]
  }

  // TODO: Is there a better way to do this reactively?
  function filteredJobs () {
    if (filter === 'all') {
      return jobs
    }

    return jobs.filter((job) => parseInt(filter) === job.placed_by)
  }

  return (
    <div className="flex m-8">
      <div class="bg-grey-100 p-8">
      <select selected={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value={'all'}>Show all</option>
        {Object.entries(recruiters).map(([id, recruiter]) => <option value={id}>{recruiter.name}</option>)}
      </select>

      <div>Recruiter rating</div>
      <div>Salary</div>
      <div>Location</div>
      </div>

      <div class="flex-1">

      Search results: {filteredJobs().length}

      <ul>
        {filteredJobs().map((job) => {
          const recruiter = getRecruiter(job.placed_by)
          return <JobListItem key={job.key} job={job} recruiter={recruiter} />
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
