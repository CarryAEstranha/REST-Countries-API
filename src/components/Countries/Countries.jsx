import { useNavigate } from 'react-router-dom';

import styles from "./Countries.module.scss";

export function Countries(props) {
    const navigate = useNavigate();

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

    return (
        <main
            id="countriesContainer"
            className={styles.countriesContainer}
        >
            {
                Object.keys(props).length !== 0 ? (
                    <>
                        {
                            props.countries.success === true ? (
                                <>
                                    {
                                        props.countries.countries.map((data, index) => {
                                            return (
                                                <div
                                                    className={styles.countrie}
                                                    key={data.name.official + index}
                                                    onClick={() => {
                                                        navigate(`/${data.name.official}`)
                                                    }}
                                                    role="button"
                                                >
                                                    <div className={styles.flagContainer}>
                                                        <div
                                                            className={styles.flag}
                                                            style={{
                                                                backgroundImage: `url(${data.flags.svg})`
                                                            }}
                                                        ></div>
                                                    </div>

                                                    <div className={styles.informationContainer}>
                                                        <h2 className={styles.countrieName}>
                                                            {data.name.common}
                                                        </h2>

                                                        <p className={styles.countrieInformation}>
                                                            Population:
                                                            <span>
                                                                {" " + data.population.toLocaleString("en-US")}
                                                            </span>
                                                        </p>
                                                        <p className={styles.countrieInformation}>
                                                            Region:
                                                            <span>
                                                                {" " + data.region}
                                                            </span>
                                                        </p>
                                                        <p className={styles.countrieInformation}>
                                                            Capital:
                                                            <span>
                                                                {" " + data.capital}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </>
                            ) : (
                                <>
                                    <div className={styles.loadDualRing}></div>

                                    <span style={{
                                        display: "block",
                                        height: "8rem"
                                    }}></span>
                                </>
                            )
                        }
                    </>
                ) : (
                    null
                )
            }
        </main>
    );
}