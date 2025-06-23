import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { CountryList } from "./components/CountriList"
import { CountryDetail } from "./components/CountryDetail"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<CountryList />} />
                    <Route path="/country/:countryId" element={<CountryDetail />} />
                </Routes>
            </Router>
        </>
    )
}

export default App