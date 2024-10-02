import { type } from "@testing-library/user-event/dist/type"

// action types to remove and add notifications
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

// action creator for adding a notification
export const addNotification = (message,type = 'info')=>({
    type:ADD_NOTIFICATION,
    payload:{id:Date.now(),message,type}
})

// action creator for removing a notification by ID
export const removeNotification = (id) =>({
    type:REMOVE_NOTIFICATION,
    payload:id
})