import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [place, setPlace] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelect = (event) => {
    const value = event.target.value;
    setPlace(value);
    // Store place details (mocked for now, replace with actual place selection logic)
    setSelectedPlace({ name: value, lat: 12.9716, lng: 77.5946 });
  };

  const handleSearch = () => {
    if (selectedPlace) {
      onSearch(selectedPlace);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={place}
        onChange={handleSelect}
        placeholder="Search for a place..."
      />
      <button onClick={handleSearch} disabled={!selectedPlace}>
        Search
      </button>
    </div>
  );
};

export default Search;
