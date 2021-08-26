// React importations
import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// Context
import { AppContext } from "../../contexts/AppContext";

// Styles import
import { Container } from "./styles.js";

// Export the country page function
export function CountryPage() {
    // Create the history
    const history = useHistory();

    // Receive the data from context
    const appContextData = useContext(AppContext);

    // useEffect that verify if data exist
    useEffect(() => {
        // Verify if data exist
        if (appContextData.visualCountryData.data.length === 0) {
            // Reset the change page
            appContextData.setUserChoice({ "changePage": false, "userChoice": appContextData.userChoice.userChoice });

            // Back to home page
            history.push("/");
        }
    }, [appContextData, history]);

    // Function that handle back to home
    function backToHome() {
        // Back to home page
        appContextData.setVisualCountryData({ "data": [], "pageIndex": 0 });
    }

    // Return the country page component
    return (
        <Container>
            <div id="countryPageContent">
                <section id="inputSection" onClick={backToHome}>
                    <button id="backButton">Back</button>
                </section>

                {appContextData.visualCountryData.data.length > 0 && appContextData.userChoice !== null ? (
                    <section id="countrySection">
                        <div id="countryContainer">
                            <div id="flagContainer">
                                <img id="flag" src={appContextData.visualCountryData.data[appContextData.userChoice.userChoice].flag} alt="Flag" />
                            </div>

                            <div id="countryInformation">
                                <h2>{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].name}</h2>

                                <div id="informationContainer">
                                    <div id="leftInformation">
                                        <p>
                                            <span className="strong">Native Name:{" "}</span>
                                            <span className="normal">{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].nativeName}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Population:{" "}</span>
                                            <span className="normal">{new Intl.NumberFormat().format(appContextData.visualCountryData.data[appContextData.userChoice.userChoice].population)}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Region:{" "}</span>
                                            <span className="normal">{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].region}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Sub Region:{" "}</span>
                                            <span className="normal">{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].subregion}</span>
                                        </p>
                                        <p>
                                            <span className="strong">Capital:{" "}</span>
                                            <span className="normal">{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].capital}</span>
                                        </p>
                                    </div>

                                    <div id="rightInformation">
                                        <p>
                                            <span className="strong">Top Level Domain:{" "}</span>
                                            <span className="normal">{appContextData.visualCountryData.data[appContextData.userChoice.userChoice].topLevelDomain}</span>
                                        </p>
                                        <div className="spanContainer">
                                            <span className="strong">Currencies:{" "}</span>
                                            {appContextData.visualCountryData.data[appContextData.userChoice.userChoice].currencies.map((currencies) => {
                                                return (
                                                    <span key={currencies.code} className="normal">{currencies.name}</span>
                                                );
                                            })}
                                        </div>
                                        <div className="spanContainer">
                                            <span className="strong">Languages:{" "}</span>
                                            {appContextData.visualCountryData.data[appContextData.userChoice.userChoice].languages.map((languages) => {
                                                return (
                                                    <span key={languages.iso639_1} className="normal">{languages.name}</span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div id="spanContainer">
                                    <span className="strong">Border Countries:{" "}</span>
                                    {appContextData.visualCountryData.data[appContextData.userChoice.userChoice].borders.map((borders) => {
                                        return (
                                            <span key={borders} className="normal">{borders}</span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    null
                )}
            </div>
        </Container>
    );
}