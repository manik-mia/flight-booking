import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBooking } from "../redux/flight-booking/actions";
import BookingList from "./BookingList";

const FlightBooking = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [bookingClass, setBookingClass] = useState("");

    const handleSubmit = (e) => {
        dispatch(addBooking({ from, to, date, guests, bookingClass }));
        e.preventDefault();
    };
    return (
        <section>
            <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                    <form
                        className="first-hero lws-inputform"
                        onSubmit={handleSubmit}
                    >
                        <div className="des-from">
                            <p>Destination From</p>
                            <div className="flex flex-row">
                                <img src="./img/icons/Frame.svg" alt="" />
                                <select
                                    className="outline-none px-2 py-2 w-full"
                                    name="from"
                                    id="lws-from"
                                    required
                                    onChange={(e) => setFrom(e.target.value)}
                                >
                                    <option value="" hidden>
                                        Please Select
                                    </option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Saidpur">Saidpur</option>
                                    <option value="Cox's Bazar">
                                        Cox's Bazar
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="des-from">
                            <p>Destination To</p>
                            <div className="flex flex-row">
                                <img src="./img/icons/Frame.svg" alt="" />
                                <select
                                    className="outline-none px-2 py-2 w-full"
                                    name="to"
                                    id="lws-to"
                                    required
                                    onChange={(e) => setTo(e.target.value)}
                                >
                                    <option value="" hidden>
                                        Please Select
                                    </option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Saidpur">Saidpur</option>
                                    <option value="Cox's Bazar">
                                        Cox's Bazar
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="des-from">
                            <p>Journey Date</p>
                            <input
                                type="date"
                                className="outline-none px-2 py-2 w-full date"
                                name="date"
                                id="lws-date"
                                required
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="des-from">
                            <p>Guests</p>
                            <div className="flex flex-row">
                                <img src="./img/icons/Vector (1).svg" alt="" />
                                <select
                                    className="outline-none px-2 py-2 w-full"
                                    name="guests"
                                    id="lws-guests"
                                    required
                                    onChange={(e) => setGuests(e.target.value)}
                                >
                                    <option value="" hidden>
                                        Please Select
                                    </option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                </select>
                            </div>
                        </div>

                        <div className="des-from !border-r-0">
                            <p>Class</p>
                            <div className="flex flex-row">
                                <img src="./img/icons/Vector (3).svg" alt="" />
                                <select
                                    className="outline-none px-2 py-2 w-full"
                                    name="ticketclassName"
                                    id="lws-ticketclassName"
                                    required
                                    onChange={(e) =>
                                        setBookingClass(e.target.value)
                                    }
                                >
                                    <option value="" hidden>
                                        Please Select
                                    </option>
                                    <option value="Business">Business</option>
                                    <option value="Economy">Economy</option>
                                </select>
                            </div>
                        </div>

                        <button
                            className="addCity"
                            type="submit"
                            id="lws-addCity"
                            disabled={bookings.length >= 3 ? true : false}
                        >
                            <svg
                                width="15px"
                                height="15px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            <span className="text-sm">Book</span>
                        </button>
                    </form>
                </div>
            </div>
            {bookings.length > 0 ? (
                <div className="table-container">
                    <table className="booking-table">
                        <thead className="bg-gray-100/50">
                            <tr className="text-black text-left">
                                <th>Destination From</th>
                                <th>Destination To</th>
                                <th className="text-center">Journey Date</th>
                                <th className="text-center">Guests</th>
                                <th className="text-center">className</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody
                            className="divide-y divide-gray-300/20"
                            id="lws-previewBooked"
                        >
                            <BookingList bookings={bookings} />
                        </tbody>
                    </table>
                </div>
            ) : (
                ""
            )}
        </section>
    );
};

export default FlightBooking;
