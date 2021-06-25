import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  toggleStatusFilter,
  toggleSalaryFilter,
  toggleRatingFilter,
} from "./filtersSlice"
import SelectableOption from "../../common/SelectableOption"
import FilterGroup from "./FilterGroup"

function SearchFilters() {
  const statusFilter = useSelector((state) => state.filters.status)
  const salaryFilter = useSelector((state) => state.filters.salary)
  const ratingFilter = useSelector((state) => state.filters.rating)

  const dispatch = useDispatch()

  return (
    <div className="pr-16 mt-10">
      <FilterGroup title="Recruiter rating">
        <SelectableOption
          label="5 stars"
          value="five_star"
          checked={ratingFilter.five_star}
          onChange={() => dispatch(toggleRatingFilter("five_star"))}
        />
        <SelectableOption
          label="4 stars"
          value="four_star"
          checked={ratingFilter.four_star}
          onChange={() => dispatch(toggleRatingFilter("four_star"))}
        />
        <SelectableOption
          label="3 stars"
          value="three_star"
          checked={ratingFilter.three_star}
          onChange={() => dispatch(toggleRatingFilter("three_star"))}
        />
      </FilterGroup>

      <FilterGroup title="Salary">
        <SelectableOption
          label="Under 30k"
          value="under_30"
          checked={salaryFilter.under_30}
          onChange={() => dispatch(toggleSalaryFilter("under_30"))}
        />
        <SelectableOption
          label="30k - 40k"
          value="between_30_45"
          checked={salaryFilter.between_30_45}
          onChange={() => dispatch(toggleSalaryFilter("between_30_45"))}
        />
        <SelectableOption
          label="Over 45k"
          value="over_45"
          checked={salaryFilter.over_45}
          onChange={() => dispatch(toggleSalaryFilter("over_45"))}
        />
        <SelectableOption
          label="Unknown"
          value="unknown"
          checked={salaryFilter.unknown}
          onChange={() => dispatch(toggleSalaryFilter("unknown"))}
        />
      </FilterGroup>

      <FilterGroup title="Status">
        <SelectableOption
          label="Position filled"
          value="position_filled"
          checked={statusFilter.position_filled}
          onChange={() => dispatch(toggleStatusFilter("position_filled"))}
        />
        <SelectableOption
          label="Expired"
          value="expired"
          checked={statusFilter.expired}
          onChange={() => dispatch(toggleStatusFilter("expired"))}
        />
        <SelectableOption
          label="Closed"
          value="closed"
          checked={statusFilter.closed}
          onChange={() => dispatch(toggleStatusFilter("closed"))}
        />
      </FilterGroup>
    </div>
  )
}

export default SearchFilters
