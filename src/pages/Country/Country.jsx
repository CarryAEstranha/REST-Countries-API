import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import styles from "./Country.module.scss";

export function Country() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [country, setCountry] = useState({
        country: [],
        success: false
    });
    const [APIAddress, setAPIAddress] = useState(`https://restcountries.com/v3.1/name/${id}`);

    useEffect(() => {
        fetch(APIAddress).then(response => {
            return response.json();
        }).then(data => {
            if (data.status === undefined) {
                setCountry({
                    country: data,
                    success: true
                });
            }
        }).catch(error => {
            console.log("Error: failed to fetch data from server");

            setCountry({
                country: [],
                success: false
            });
        });
    }, [APIAddress]);

    if (!Object.keys) {
        Object.keys = (function () {
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys chamado de non-object');
                }

                var result = [], prop, i;

                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }

                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }

    // Define o título da página
    document.title = `The Countries | ${id}`;

    return (
        <main className={styles.pageContainer}>
            <button
                className={styles.backButton}
                onClick={() => {
                    navigate("/");
                }}
            >
                Back
            </button>

            {
                country.success === true ? (
                    <div className={styles.countryContainer}>
                        <div
                            className={styles.flag}
                            style={{
                                backgroundImage: `url(${country.country[0].flags.svg})`
                            }}
                        ></div>

                        <div className={styles.informationContainer}>
                            <h2 className={styles.countryName}>
                                {country.country[0].name.common}
                            </h2>

                            <div className={styles.countryInformationContainer}>
                                <div className={styles.leftSide}>
                                    <p className={styles.countryInformation}>
                                        Native Name:
                                        {
                                            country.country[0].name.hasOwnProperty("nativeName") ? (
                                                <>
                                                    {
                                                        Object.entries(country.country[0].name.nativeName).map((nativeName, index) => {
                                                            if (Object.entries(country.country[0].name.nativeName).length - 1 === index) {
                                                                return (
                                                                    <span key={nativeName[1] + index}>
                                                                        {" " + nativeName[1].official}
                                                                    </span>
                                                                );
                                                            } else {
                                                                return (
                                                                    <span key={nativeName[1] + index}>
                                                                        {" " + nativeName[1].official + ","}
                                                                    </span>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                null
                                            )
                                        }
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Population:
                                        <span>
                                            {" " + country.country[0].population.toLocaleString("en-US")}
                                        </span>
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Region:
                                        <span>
                                            {" " + country.country[0].region}
                                        </span>
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Sub Region:
                                        <span>
                                            {" " + country.country[0].subregion}
                                        </span>
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Capital:
                                        {
                                            country.country[0].hasOwnProperty("capital") ? (
                                                country.country[0].capital.map((capital, index) => {
                                                    if (country.country[0].capital.length - 1 === index) {
                                                        return (
                                                            <span key={capital + index}>
                                                                {" " + capital}
                                                            </span>
                                                        );
                                                    } else {
                                                        return (
                                                            <span key={capital + index}>
                                                                <span key={capital + index}>
                                                                    {" " + capital + ","}
                                                                </span>
                                                            </span>
                                                        );
                                                    }
                                                })
                                            ) : (
                                                null
                                            )
                                        }
                                    </p>
                                </div>

                                <div className={styles.rightSide}>
                                    <p className={styles.countryInformation}>
                                        Top Level Domain:
                                        {
                                            country.country[0].tld.map((topLevelDomain, index) => {
                                                if (country.country[0].tld.length - 1 === index) {
                                                    return (
                                                        <span key={topLevelDomain + index}>
                                                            {" " + topLevelDomain}
                                                        </span>
                                                    );
                                                } else {
                                                    return (
                                                        <span key={topLevelDomain + index}>
                                                            {" " + topLevelDomain + ","}
                                                        </span>
                                                    );
                                                }
                                            })
                                        }
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Currencies:
                                        {
                                            country.country[0].hasOwnProperty("currencies") ? (
                                                <>
                                                    {
                                                        Object.entries(country.country[0].currencies).map((currencie, index) => {
                                                            if (Object.entries(country.country[0].currencies).length - 1 === index) {
                                                                return (
                                                                    <span key={currencie + index}>
                                                                        {" " + currencie[1].name}
                                                                    </span>
                                                                );
                                                            } else {
                                                                return (
                                                                    <span key={currencie + index}>
                                                                        {" " + currencie[1].name + ","}
                                                                    </span>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                null
                                            )
                                        }
                                    </p>
                                    <p className={styles.countryInformation}>
                                        Languages:
                                        {
                                            country.country[0].hasOwnProperty("languages") ? (
                                                <>
                                                    {
                                                        Object.entries(country.country[0].languages).map((language, index) => {
                                                            if (Object.entries(country.country[0].languages).length - 1 === index) {
                                                                return (
                                                                    <span key={language + index}>
                                                                        {" " + language[1]}
                                                                    </span>
                                                                );
                                                            } else {
                                                                return (
                                                                    <span key={language + index}>
                                                                        {" " + language[1] + ","}
                                                                    </span>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                null
                                            )
                                        }
                                    </p>
                                </div>
                            </div>

                            <p className={styles.borderCountries}>
                                {"Border Countries: "}
                                {
                                    country.country[0].hasOwnProperty("borders") ? (
                                        <>
                                            {
                                                country.country[0].borders.map((border, index) => {
                                                    return (
                                                        <button
                                                            key={border + index}
                                                            onClick={() => {
                                                                setCountry({
                                                                    country: [],
                                                                    success: false
                                                                });

                                                                setAPIAddress(`https://restcountries.com/v3.1/alpha/${border}`);
                                                            }}
                                                        >
                                                            {border}
                                                        </button>
                                                    );
                                                })
                                            }
                                        </>
                                    ) : (
                                        null
                                    )
                                }
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <span style={{
                            display: "block",
                            height: "0rem"
                        }}></span>

                        <div className={styles.loadDualRing}></div>

                        <span style={{
                            display: "block",
                            height: "8rem"
                        }}></span>
                    </>
                )
            }
        </main>
    );
}