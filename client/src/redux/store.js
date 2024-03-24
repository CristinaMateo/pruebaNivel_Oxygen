import { configureStore } from '@reduxjs/toolkit'
import conversorReducer from './slices/conversorSlices'

export default configureStore({
  reducer: {
    conversor:conversorReducer,
  },
}) 