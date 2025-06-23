import { useEffect, useState } from "react"
import countriesData from "../data/countries.json"
import { useParams, Link } from "react-router-dom"

export function CountryDetail() {
    const { countryId } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        const foundCountry = countriesData.find(c => c.id === countryId)
        setCountry(foundCountry)
        console.log(foundCountry)
    }, [countryId])
    return (
        <>
            <div className="countriDetail container">
                <Link  to="/" className="icoPrev">
                    <img src="/ico-prev.svg" alt="" />
                </Link>
                {country ? (
                    <div className="title">
                        <span>{country.name}</span>
                        <span>{country.capital}</span>
                        <span>{country.population}</span>
                        <span>{country.language}</span>
                        <span>{country.description}</span>
                    </div>
                ) : (
                    <p>Загрузка...</p>
                )}
            </div>
        </>
    )
}

export default CountryDetail