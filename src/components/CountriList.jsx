import { Link } from "react-router-dom"
import countriesData from "../data/countries.json"


export function CountryList() {
    return (
        <>
            <div className="container">
                <span>Выберите страну</span>
                <div className="groupBtnCountriList">
                    {
                        countriesData.map(country => (
                            <Link className="itemBtn"
                                key={country.id}
                                to={'/country/' + country.id}
                            >
                                {country.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CountryList