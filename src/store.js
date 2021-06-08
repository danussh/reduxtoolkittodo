import { configureStore } from '@reduxjs/toolkit'
import Userreducer from '../src/reducers/Userreducer'
export default configureStore({
  reducer: {
      users:Userreducer
  },
})