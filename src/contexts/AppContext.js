// React imports
import { createContext, useState } from "react";

// Create and export the context
export const AppContext = createContext({});

// Export the function of contexts
export function AppContextProvider(props) {
    // State that save the country data from API
    const [countryData, setCountryData] = useState([]);
    // State that storage the visual data
    const [visualCountryData, setVisualCountryData] = useState({ "data": [], "pageIndex": 0 });
    // State that storage the pageIndexArray
    const [pageIndexArray, setPageIndexArray] = useState([]);
    // State that storage the userChoice for country
    const [userChoice, setUserChoice] = useState({"changePage": false, "userChoice": null});

    // Return the context
    return (
        <AppContext.Provider value={{ countryData, setCountryData, visualCountryData, setVisualCountryData, pageIndexArray, setPageIndexArray, userChoice, setUserChoice }}>
            {props.children}
        </AppContext.Provider>
    );
}