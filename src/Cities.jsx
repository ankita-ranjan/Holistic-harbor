import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Image } from "react-bootstrap";
import "./cities.css";

const Cities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
  
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=&key=302f70d2f7b343c6a950159cdd371c38`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const countryNames = data.results.map(
        (result) => result.components.country
      );
      setCountries([...new Set(countryNames)]);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // Logic for searching based on the selectedCountry, selectedState, selectedCity
  };

  return (
    <div className="">
      <div className="text">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <label style={{ marginBottom: "0.5rem" }}>Country:</label>
          <select
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setStates([]);
              setCities([]);
            }}
            style={{ padding: "8px" }}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          {selectedCountry && (
            <>
              <label style={{ marginBottom: "0.5rem" }}>State:</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setCities([]);
                }}
                style={{ padding: "8px" }}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </>
          )}

          {selectedState && (
            <>
              <label style={{ marginBottom: "0.5rem" }}>City:</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ padding: "8px" }}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </>
          )}

          <Button
            variant="primary"
            type="submit"
            style={{ height: "auto", padding: "8px 16px" }}
          >
            Search
          </Button>
        </form>
      </div>

      <div className="grid">
        <div className="grid__item">
          <div className="card">
            <img
              className="card__img"
              src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Snowy Mountains"
            />
            <div className="card__content">
              <h1 className="card__header">Kedarnath</h1>
              <p className="card__text">
                Standing magnificently at an altitude of 3,580mts and enveloped
                in Garhwal Himalayas.
                <strong>Immersed</strong> in the amazing mountain range of
                Utrakhand.
              </p>

              <button className="card__btn">
                Explore <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid__item">
          <div className="card">
            <img
              className="card__img"
              src="https://images.unsplash.com/photo-1681797849305-206966d6a5bf?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Desert"
            />
            <div className="card__content">
              <h1 className="card__header">Kashi Vishawnath</h1>
              <p className="card__text">
                Temple is most famous Hindu temples dedicated to Lord Shiva.
                <a href="know more"></a> <strong>essence</strong> of the early
                sunrise in the varanasi wilderness.
              </p>

              <button className="card__btn">
                Explore <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid__item">
          <div className="card">
            <img
              className="card__img"
              src="https://images.unsplash.com/photo-1620758661032-693581dc04d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Canyons"
            />
            <div className="card__content">
              <h1 className="card__header">Nada Saheb</h1>
              <p className="card__text">
                Nada Sahib is a Sikh gurudwara in the Panchkula district of the
                Indian state of Haryana. <strong>stunning</strong> Utah C
              </p>
              <button className="card__btn">
                Explore <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
