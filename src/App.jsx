// React importations
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages importations
import { Home } from "./pages/Home";
import { CountryPage } from "./pages/CountryPage";

// Components importations
import { Header } from "./components/Header";

// Context Provider
import { AppContextProvider } from "./contexts/AppContext";

// App function
function App() {
	// Return the app
	return (
		<BrowserRouter>
			<AppContextProvider>
				<Header />
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={CountryPage} path="/country-page" />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
}

export default App;