import { createSlice } from "@reduxjs/toolkit"
import { recruiters } from "./data/matched_jobs.json"

export const recruitersSlice = createSlice({
  name: "recruiters",
  initialState: {
    recruitersById: recruiters,
  },
})

export default recruitersSlice.reducer

export const selectRecruiterById = (state, id) =>
  state.recruiters.recruitersById[id]
