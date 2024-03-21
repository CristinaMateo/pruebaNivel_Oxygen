import { createSlice } from '@reduxjs/toolkit'


const factors = {
    "km-miles": 1/1.609,
    "miles-km": 1.609
}

export const convertorSlice = createSlice({
  name: 'convertor',
  initialState: {
    value: 0,
  },
  reducers: {
    convert: (state, action) => {
      state.value = action.payload.input*factors[action.payload.option]
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { convert } = convertorSlice.actions

export default convertorSlice.reducer