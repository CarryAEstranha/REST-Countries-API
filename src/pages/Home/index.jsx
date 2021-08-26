// React importations
import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// Context
import { AppContext } from "../../contexts/AppContext";

// Material-UI import
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles import
import { Container } from "./styles.js";

// Images import
import searchIcon from "../../assets/loupe.png";

// Export the home page component
export function Home() {
    // Create the history
    const history = useHistory();

    // Receive the data from context
    const appContextData = useContext(AppContext);

    // Variable timer for delay user input
    let timerDelay = 0;

    // useEffect that fetch the data and identify changes on the data state
    useEffect(() => {
        // Verify if the data is a array 0
        if (appContextData.countryData.length === 0) {
            // Fetch the country data into state
            fetch("https://restcountries.eu/rest/v2/all").then(response => response.json()).then(data => {
                // Update the data state
                appContextData.setCountryData(data);
            });
        } else {
            // Verify if the visual data is loaded
            if (appContextData.visualCountryData.data.length === 0) {
                // Update the visual data with the fetch data
                appContextData.setVisualCountryData({ "data": appContextData.countryData, "pageIndex": appContextData.visualCountryData.pageIndex });
            } else {
                // Remove the circular progress
                document.getElementById("circularProgress").style.display = "none";
                // Show the countries
                document.getElementById("countrySection").style.display = "grid";
                // Show the first navBar
                document.getElementById("nav1").style.display = "flex";
                // Show the second navBar
                document.getElementById("nav2").style.display = "flex";
            }
        }
    }, [appContextData]);

    // useEffect that verify if visual data changed
    useEffect(() => {
        // Number of pages
        const number = parseInt(appContextData.visualCountryData.data.length / 32) + 1;
        // Array of pages
        const array = Array.from(Array(number).keys());

        // Update the array for index pages
        appContextData.setPageIndexArray(array);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appContextData.visualCountryData]);

    // useEffect that verify if user choose a country
    useEffect(() => {
        // Verify if is valid
        if (appContextData.userChoice.changePage === true) {
            // Push to country page
            history.push("/country-page");
        }
    }, [appContextData.userChoice, history]);

    // Function that delay the user input
    function inputTimer(props) {
        // Set a 1 second delay
        timerDelay = window.setTimeout(function () {
            // Verify if value is empty
            if (props === "") {
                // Fetch the data for all countries
                fetch("https://restcountries.eu/rest/v2/all").then(response => response.json()).then(data => {
                    // Update the state     
                    appContextData.setVisualCountryData({ "data": data, "pageIndex": 0 });
                });
            } else {
                // Fetch the data for the value country
                fetch(`https://restcountries.eu/rest/v2/name/${props}`).then(response => response.json()).then(data => {
                    // Verify if data exist
                    if (data.length > 0) {
                        // Update the state
                        appContextData.setVisualCountryData({ "data": data, "pageIndex": 0 });
                    } else {
                        // Update the state
                        appContextData.setVisualCountryData({ "data": [], "pageIndex": 0 });
                    }
                });
            }
        }, 400);
    }

    // Function that handle the search input
    function searchInput(props) {
        // Hide the countries
        document.getElementById("countrySection").style.display = "none";
        // Show the circular progress
        document.getElementById("circularProgress").style.display = "flex";
        // Remove the first navBar
        document.getElementById("nav1").style.display = "none";
        // Remove the second navBar
        document.getElementById("nav2").style.display = "none";

        // Receive the value
        const value = document.getElementById("inputSearch").value;

        // Reset the timer delay
        clearTimeout(timerDelay);

        // Call the delayed function for fetch data
        inputTimer(value);
    }

    // Function that handle filter by region
    function filterRegion(region) {
        // Reset input value
        document.getElementById("inputSearch").value = "";

        // Hide the countries
        document.getElementById("countrySection").style.display = "none";
        // Show the circular progress
        document.getElementById("circularProgress").style.display = "flex";
        // Remove the first navBar
        document.getElementById("nav1").style.display = "none";
        // Remove the second navBar
        document.getElementById("nav2").style.display = "none";

        // Fetch the data for region
        fetch(region).then(response => response.json()).then(data => {
            // Update the visual data
            appContextData.setVisualCountryData({ "data": data, "pageIndex": 0 });
        });
    }

    // Function that handle the page index
    function pageIndex(props) {
        // Go to top of page
        window.location.href = "#homeContent";

        // Set the page index
        appContextData.setVisualCountryData({ "data": appContextData.visualCountryData.data, "pageIndex": props });

        // Verify if the page index is zero
        if (props < 0) {
            // Go to last page
            appContextData.setVisualCountryData({ "data": appContextData.visualCountryData.data, "pageIndex": appContextData.pageIndexArray.length - 1 });
        } else if (props > appContextData.pageIndexArray.length - 1) { // Verify if the page index is in the last
            // Go to first page
            appContextData.setVisualCountryData({ "data": appContextData.visualCountryData.data, "pageIndex": 0 });
        }
    }

    // Function that handle the user choice
    function countryChoice(index) {
        // Set the user choice
        appContextData.setUserChoice({ "changePage": true, "userChoice": index });
    }

    // Return the home component
    return (
        <Container>
            <div id="homeContent">
                <section id="inputSection">
                    <form action="#" id="searchForm">
                        <button type="submit">
                            <img src={searchIcon} alt="Search" />
                        </button>

                        <label className="hidden" htmlFor="inputSearch">Search for a country...</label>
                        <input
                            id="inputSearch"
                            name="searchCountry"
                            type="text"
                            placeholder="Search for a country..."
                            onChange={() => searchInput(this)}
                            required
                        />
                    </form>

                    <div id="regionSelectionContainer">
                        <div id="placeholder">
                            <span>Filter by Region</span>
                        </div>

                        <div id="marginLine"></div>

                        <div id="options">
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/all")}>All</button>
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/region/africa")}>Africa</button>
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/region/americas")}>America</button>
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/region/asia")}>Asia</button>
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/region/europe")}>Europe</button>
                            <button onClick={() => filterRegion("https://restcountries.eu/rest/v2/region/oceania")}>Oceania</button>
                        </div>
                    </div>
                </section>

                <nav id="nav1" className="navPage">
                    <button className="pageIndexLink" style={{ "paddingTop": "0.2rem" }} onClick={() => pageIndex(appContextData.visualCountryData.pageIndex - 1)}>{"<"}</button>
                    {appContextData.pageIndexArray.map((page, index) => {
                        return (
                            <button key={index} className="pageIndexLink" onClick={() => pageIndex(index)}>{page + 1}</button>
                        );
                    })}
                    <button className="pageIndexLink" style={{ "paddingTop": "0.2rem" }} onClick={() => pageIndex(appContextData.visualCountryData.pageIndex + 1)}>{">"}</button>
                </nav>

                <section id="countrySection">
                    {appContextData.visualCountryData.data.map((data, index) => {
                        if (index >= appContextData.visualCountryData.pageIndex * 32 && index < appContextData.visualCountryData.pageIndex * 32 + 32) {
                            return (
                                <div id="countryContainer" className="countryContainer" key={index} onClick={() => countryChoice(index)}>
                                    <div className="flagContainerMaster">
                                        <div className="flagContainer" style={{ "backgroundImage": `url(${data.flag})` }}></div>
                                    </div>

                                    <div className="countryInformation">
                                        <h2>{data.name}</h2>

                                        <p>
                                            <span className="strong">Population:{" "}</span>
                                            <span className="normal">{new Intl.NumberFormat().format(data.population)}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Region:{" "}</span>
                                            <span className="normal">{data.region}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Capital:{" "}</span>
                                            <span className="normal">{data.capital}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                null
                            );
                        }
                    })}
                </section>

                <nav id="nav2" className="navPage">
                    <button className="pageIndexLink" style={{ "paddingTop": "0.2rem" }} onClick={() => pageIndex(appContextData.visualCountryData.pageIndex - 1)}>{"<"}</button>
                    {appContextData.pageIndexArray.map((page, index) => {
                        return (
                            <button key={index} className="pageIndexLink" onClick={() => pageIndex(index)}>{page + 1}</button>
                        );
                    })}
                    <button className="pageIndexLink" style={{ "paddingTop": "0.2rem" }} onClick={() => pageIndex(appContextData.visualCountryData.pageIndex + 1)}>{">"}</button>
                </nav>
            </div>

            <div id="circularProgress">
                <CircularProgress />
            </div>
        </Container>
    );
}