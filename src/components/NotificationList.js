import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeNotification } from "../actions/notificationActions";

const NotificationList = () =>{
    //retrieve list of notifications from the store
    const notifications = useSelector(state => state.notifications)
    // dispatch to handle notification removal
    const dispatch = useDispatch()

    // automatically remove notifications
    useEffect(() =>{
        const timers = notifications.map((notification) =>
        setTimeout(() =>{
            dispatch(removeNotification(notification.id))
        },5000))
    
    return () =>{
        timers.forEach((timer) => clearTimeout(timer)) //cleanup timers on unmount
    }
},[notifications,dispatch])

    return(
        <div className="notification-list fixed top-0 p-4 z-50">
            {notifications.length === 0 ? (
                <p className="text-gray-400">No notifications</p>
            ) : (notifications.map(notification => (
                <div
                key={notification.id}
                className={`notification bg-${notification.type === 'error' ? 'red' : 'green'}-500 text-white rounded-md p-3 mb-2`}>
                    <span>{notification.message}</span>
                    {/* button to dismiss the notification */}
                    <button
                    className="ml-4 text-sm text-red-700 font-bold hover:underline"
                    onClick={() => dispatch(removeNotification(notification.id))}>
                          Dismiss
                    </button>

                </div>
            )))}
        </div>
    )
}
export default NotificationList;