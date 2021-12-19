import styles from "./FilterInput.module.scss";

import search from "../../assets/lupa.png";

export function FilterInput(props) {
    let inputTimeOut = null;

    return (
        <section className={styles.filterInputContainer}>
            <form
                action=""
                className={styles.searchForm}
            >
                <button
                    className={styles.submitButton}
                    disabled
                    type="submit"
                >
                    <img
                        alt="Search"
                        src={search}
                    />
                </button>

                <label
                    className={styles.hidden}
                    htmlFor="searchInput"
                >
                    Search for a country...
                </label>
                <input
                    className={styles.searchInput}
                    id="searchInput"
                    onChange={() => {
                        clearTimeout(inputTimeOut);

                        inputTimeOut = setTimeout(() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });

                            if (document.getElementById("searchInput").value === "") {
                                props.region.setAPIAddress("https://restcountries.com/v3.1/all");
                            } else {
                                props.region.setAPIAddress(`https://restcountries.com/v3.1/name/${document.getElementById("searchInput").value}`);
                            }
                        }, 500);
                    }}
                    placeholder="Search for a country..."
                    type="text"
                />
            </form>

            <div className={styles.filterContainerMaster}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterButton}>
                        <p>Filter by Region</p>
                    </div>

                    <div className={styles.regionsContainer}>
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/all");
                            
                            document.getElementById("searchInput").value = "";
                        }}>
                            All
                        </button><br />
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/region/africa");

                            document.getElementById("searchInput").value = "";
                        }}>
                            Africa
                        </button><br />
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/region/america");

                            document.getElementById("searchInput").value = "";
                        }}>
                            America
                        </button><br />
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/region/asia");

                            document.getElementById("searchInput").value = "";
                        }}>
                            Asia
                        </button><br />
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/region/europe");

                            document.getElementById("searchInput").value = "";
                        }}>
                            Europe
                        </button><br />
                        <button onClick={() => {
                            props.region.setCountries({
                                countries: [],
                                success: false
                            });
                            props.region.setAPIAddress("https://restcountries.com/v3.1/region/oceania");

                            document.getElementById("searchInput").value = "";
                        }}>
                            Oceania
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}