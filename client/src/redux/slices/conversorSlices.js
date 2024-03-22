import { createSlice } from '@reduxjs/toolkit'


const factors = {
    "km-miles": 1/1.609,
    "miles-km": 1.609,
    "Ft-m": 1/3.281,
    "m-FT": 3.281,
    "cm-inches": 1/ 2.54,
    "inches-cm": 2.54
}

export const conversorSlice = createSlice({
  name: 'conversor',
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
export const { convert } = conversorSlice.actions

export default conversorSlice.reducer