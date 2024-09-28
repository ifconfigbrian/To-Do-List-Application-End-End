const initialState = {
    notifications: [],
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      // Add your action cases here
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  