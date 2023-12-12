import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    set(state, action) {
      return action.payload
    }
  },
})

export const { set } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (notification, timeout) => {
  return dispatch => {
    dispatch(set(notification))
    setTimeout(() => {
      dispatch(set(''))
    }, timeout * 1000)
  }
}