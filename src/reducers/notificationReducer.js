import { ADD_NOTIFICATION,REMOVE_NOTIFICATION } from "../actions/notificationActions";

const initialState = [] //empty array for the initial state
  
// notification reducer to manage list of notifications
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      // Add a new notification to the state array
      case ADD_NOTIFICATION:
        return [...state,action.payload]

      case REMOVE_NOTIFICATION:
        return state.filter(notification => notification.id !== action.payload)
        
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  