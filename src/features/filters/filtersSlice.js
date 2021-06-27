import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: {
      position_filled: true,
      expired: true,
      closed: true,
    },
    salary: {
      unknown: true,
      under_30: true,
      between_30_45: true,
      over_45: true,
    },
    rating: {
      five_star: true,
      four_star: true,
      three_star: true,
    },
  },
  reducers: {
    toggleSalaryFilter: (state, action) => {
      state.salary[action.payload] = !state.salary[action.payload]
    },
    toggleStatusFilter: (state, action) => {
      state.status[action.payload] = !state.status[action.payload]
    },
    toggleRatingFilter: (state, action) => {
      state.rating[action.payload] = !state.rating[action.payload]
    },
  },
})

export const { toggleSalaryFilter, toggleStatusFilter, toggleRatingFilter } =
  filtersSlice.actions

export default filtersSlice.reducer
