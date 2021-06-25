import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  toggleStatusFilter,
  toggleSalaryFilter,
  toggleRatingFilter,
} from "./filtersSlice"
import SelectableOption from "../../common/SelectableOption"

function SearchFilters() {
  const statusFilter = useSelector((state) => state.filters.status)
  const salaryFilter = useSelector((state) => state.filters.salary)
  const ratingFilter = useSelector((state) => state.filters.rating)

  const dispatch = useDispatch()

  return (
    <div className="pr-8 w-1/4">
      <div>Recruiter rating</div>
      <SelectableOption
        label="5 stars"
        name="five_star"
        value="five_star"
        checked={ratingFilter.five_star}
        onChange={() => dispatch(toggleRatingFilter("five_star"))}
      />
      <SelectableOption
        label="4 stars"
        name="four_star"
        value="four_star"
        checked={ratingFilter.four_star}
        onChange={() => dispatch(toggleRatingFilter("four_star"))}
      />
      <SelectableOption
        label="3 stars"
        name="three_star"
        value="three_star"
        checked={ratingFilter.three_star}
        onChange={() => dispatch(toggleRatingFilter("three_star"))}
      />

      <div>Salary</div>

      <SelectableOption
        label="Under 30k"
        name="under_30"
        value="under_30"
        checked={salaryFilter.under_30}
        onChange={() => dispatch(toggleSalaryFilter("under_30"))}
      />
      <SelectableOption
        label="30k - 40k"
        name="between_30_45"
        value="between_30_45"
        checked={salaryFilter.between_30_45}
        onChange={() => dispatch(toggleSalaryFilter("between_30_45"))}
      />
      <SelectableOption
        label="Over 45k"
        name="over_45"
        value="over_45"
        checked={salaryFilter.over_45}
        onChange={() => dispatch(toggleSalaryFilter("over_45"))}
      />
      <SelectableOption
        label="Unknown"
        name="unknown"
        value="unknown"
        checked={salaryFilter.unknown}
        onChange={() => dispatch(toggleSalaryFilter("unknown"))}
      />

      <div>Status</div>

      <SelectableOption
        label="Position filled"
        name="position_filled"
        value="position_filled"
        checked={statusFilter.position_filled}
        onChange={() => dispatch(toggleStatusFilter("position_filled"))}
      />
      <SelectableOption
        label="Expired"
        name="expired"
        value="expired"
        checked={statusFilter.expired}
        onChange={() => dispatch(toggleStatusFilter("expired"))}
      />
      <SelectableOption
        label="Closed"
        name="closed"
        value="closed"
        checked={statusFilter.closed}
        onChange={() => dispatch(toggleStatusFilter("closed"))}
      />
    </div>
  )
}

export default SearchFilters
