import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom"

import { Header } from "./components/Header/Header";

import { Country } from "./pages/Country/Country";
import { Home } from "./pages/Home/Home";

import "./styles/global.css";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route
					element={<Home />}
					exact
					path="/"
				/>

				<Route
					element={<Country />}
					path="/:id"
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;