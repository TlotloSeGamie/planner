import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "fe9a214daa542ac38cf93efa22dbf3fb"; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    // Fetch user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError(
            "Unable to fetch location. Please enable location services."
          );
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    // Fetch weather data once the location is available
    if (location.lat && location.lon) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError("Failed to fetch weather data.");
          console.error(err);
        }
      };
      fetchWeather();
    }
  }, [location]);

  return (
    <div className="home-main-container">
      <div className="home-container">
        <div className="today-weather">
          <h2>Today's Weather</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weatherData ? (
            <div className="weather-details">
              <h3>{weatherData.name}</h3>
              <p>
                <strong>Temperature:</strong> {weatherData.main.temp}°C
              </p>
              <p>
                <strong>Condition:</strong> {weatherData.weather[0].description}
              </p>
              <p>
                <strong>Humidity:</strong> {weatherData.main.humidity}%
              </p>
              <p>
                <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
              </p>
            </div>
          ) : (
            !error && <p>Loading weather data...</p>
          )}
        </div>

        <div className="maps">
          <h2>Your Location</h2>
          <iframe
            title="Relaxation Places"
            src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBBHnGb9GoEMRzyPXqafNk4nshyXIIsMf0&q=relaxation&center=${location.lat},${location.lon}`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
