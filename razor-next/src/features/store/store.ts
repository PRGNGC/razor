import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '@/features/store/menu/menuSlice'

export const store = configureStore({
  reducer: {
    menuReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})