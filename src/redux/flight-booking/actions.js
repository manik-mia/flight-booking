import { ADD_BOOKING, CANCEL_BOOKING } from "./actionTypes";

export const addBooking = ({ from, to, date, guests, bookingClass }) => {
    return {
        type: ADD_BOOKING,
        payload: {
            from,
            to,
            date,
            guests,
            bookingClass,
        },
    };
};
export const cancelBooking = ({ id }) => {
    return {
        type: CANCEL_BOOKING,
        payload: {
            id,
        },
    };
};
