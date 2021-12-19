import {
    useEffect,
    useState
} from "react";

import { Countries } from "../../components/Countries/Countries";
import { FilterInput } from "../../components/FilterInput/FilterInput";

export function Home() {
    const [countries, setCountries] = useState({
        countries: [],
        success: false
    });
    const [APIAddress, setAPIAddress] = useState("https://restcountries.com/v3.1/all");

    useEffect(() => {
        fetch(APIAddress).then(response => {
            return response.json();
        }).then(data => {
            if (data.status === undefined) {
                setCountries({
                    countries: data.sort((a, b) => a.name.common.localeCompare(b.name.common)),
                    success: true
                });
            }
        }).catch(error => {
            console.log("Error: failed to fetch data from server");

            setCountries({
                countries: [],
                success: false
            });
        });
    }, [APIAddress]);

    // Define o título da página
    document.title = "The Countries | Home";

    return (
        <>
            <span style={{
                display: "block",
                height: "3rem"
            }}></span>

            <FilterInput region={{APIAddress, setAPIAddress, setCountries}} />

            <span style={{
                display: "block",
                height: "3rem"
            }}></span>

            <Countries countries={countries} />
        </>
    );
}