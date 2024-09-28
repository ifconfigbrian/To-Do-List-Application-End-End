import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    notifications: notificationReducer,
  },
});

export default store;