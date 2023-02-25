import "./assets/css/style.css";
import Header from "./components/Header";
import FlightBooking from "./components/FlightBooking";
import { Provider } from "react-redux";
import store from "../src/redux/store";
function App() {
    return (
        <Provider store={store}>
            <Header />
            <FlightBooking />
        </Provider>
    );
}

export default App;
