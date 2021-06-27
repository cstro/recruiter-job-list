import { createSlice } from "@reduxjs/toolkit"

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
  },
  reducers: {
    storeJobs: (state, action) => {
      state.allJobs = Object.entries(action.payload).map(([id, job]) => ({
        ...job,
        id,
      }))
    },
  },
})

export const { storeJobs } = jobsSlice.actions

export default jobsSlice.reducer
