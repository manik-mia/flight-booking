import { ADD_BOOKING, CANCEL_BOOKING } from "./actionTypes";

const initialState = [];
const nextBookingId = (bookings) => {
    const id = bookings.reduce((id, booking) => Math.max(booking.id, id), -1);
    return id + 1;
};
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return [
                ...state,
                {
                    id: nextBookingId(state),
                    ...action.payload,
                },
            ];

        case CANCEL_BOOKING:
            return state.filter((booking) => booking.id !== action.payload.id);

        default:
            return state;
    }
};

export default bookingReducer;
