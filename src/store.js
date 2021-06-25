import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "./features/jobs/jobsSlice"
import filtersReducer from "./features/filters/filtersSlice"
import recruitersReducer from "./features/recruiters/recruitersSlice"

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
    recruiters: recruitersReducer,
  },
})
