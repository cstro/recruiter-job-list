import { configureStore } from "@reduxjs/toolkit"
import jobsReducer from "./jobsSlice"
import recruitersReducer from "./recruitersSlice"

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    recruiters: recruitersReducer,
  },
})
