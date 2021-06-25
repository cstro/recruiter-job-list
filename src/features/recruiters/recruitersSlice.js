import { createSlice } from "@reduxjs/toolkit"

export const recruitersSlice = createSlice({
  name: "recruiters",
  initialState: {
    recruitersById: {},
  },
  reducers: {
    storeRecruiters: (state, action) => {
      state.recruitersById = action.payload
    },
  },
})

export const { storeRecruiters } = recruitersSlice.actions

export default recruitersSlice.reducer
