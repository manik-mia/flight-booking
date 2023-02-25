import { createStore } from "redux";
import bookingReducer from "./flight-booking/bookingReducer";
const store = createStore(bookingReducer);
export default store;
