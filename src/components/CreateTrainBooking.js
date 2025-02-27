import React, { useState } from "react";

// A simple mapping of station names to their corresponding codes
const stationCodeMap = {
  "New Delhi": "NDLS",
  "Mumbai CST": "CST",
  "Kolkata": "HWH",
  "Chennai": "MAS",
  "Bangalore": "SBC",
  "Hyderabad": "HYB",
  "Vijayawada": "BZA",
  "Madurai": "MDU",
  "Delhi Cantt": "DEC",
  "Lucknow": "LKO",
  "Patna": "PNBE",
  "Agra": "AGC",
  "Varanasi": "BSB",
  "Jaipur": "JP",
  "Surat": "ST",
};

const TrainSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!from || !to || !date) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);

    // Check if the entered stations are in the station code map
    const fromCode = stationCodeMap[from];
    const toCode = stationCodeMap[to];

    if (!fromCode || !toCode) {
      setError("Invalid station name(s). Please check and try again.");
      return;
    }

    // Format the URL to match ConfirmTKT's working structure
    const formattedDate = new Date(date).toLocaleDateString("en-GB").split("/").join("-"); // Convert YYYY-MM-DD to DD-MM-YYYY

    // Generate the dynamic search URL
    const searchUrl = `https://www.confirmtkt.com/rbooking-d/trains/from/${fromCode}/to/${toCode}/${formattedDate}`;

    // Redirect user to the train search page
    window.location.href = searchUrl;
  };

  return (
    <div className="train-search">
      <h2>Search Trains</h2>
      <input
        type="text"
        placeholder="From Station (e.g., Vijayawada)"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        type="text"
        placeholder="To Station (e.g., Madurai)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search Train</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TrainSearch;
