import React, { useState } from "react";

const FlightBooking = () => {
  // Initial state for the search form
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    returnDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    flightClass: "w", // Default is Economy
  });

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  // Handle the flight search form submission
  const handleSearch = () => {
    // Encode all input data to be used in the URL
    const formattedFrom = encodeURIComponent(searchData.from);
    const formattedTo = encodeURIComponent(searchData.to);
    const formattedDate = encodeURIComponent(new Date(searchData.date).toLocaleDateString("en-GB").split("/").join("-"));
    const formattedReturnDate = encodeURIComponent(new Date(searchData.returnDate).toLocaleDateString("en-GB").split("/").join("-"));
    const formattedAdults = encodeURIComponent(searchData.adults);
    const formattedChildren = encodeURIComponent(searchData.children);
    const formattedInfants = encodeURIComponent(searchData.infants);
    const formattedClass = encodeURIComponent(searchData.flightClass);

    // Generate the dynamic URL with the encoded values
    const flightSearchUrl = `https://www.ixigo.com/search/result/flight?from=${formattedFrom}&to=${formattedTo}&date=${formattedDate}&returnDate=${formattedReturnDate}&adults=${formattedAdults}&children=${formattedChildren}&infants=${formattedInfants}&class=${formattedClass}&source=Search+Form&hbs=true&utm_source=Brand_Ggl_Search&utm_medium=paid_search_google`;

    // Redirect the user to the generated URL
    window.location.href = flightSearchUrl;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Flight</h2>

      {/* Flight Search Form */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <label>From:</label>
        <input
          type="text"
          name="from"
          value={searchData.from}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>To:</label>
        <input
          type="text"
          name="to"
          value={searchData.to}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Date of Journey:</label>
        <input
          type="date"
          name="date"
          value={searchData.date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Return Date:</label>
        <input
          type="date"
          name="returnDate"
          value={searchData.returnDate}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Number of Adults:</label>
        <input
          type="number"
          name="adults"
          value={searchData.adults}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Number of Children:</label>
        <input
          type="number"
          name="children"
          value={searchData.children}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Number of Infants:</label>
        <input
          type="number"
          name="infants"
          value={searchData.infants}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <label>Class:</label>
        <select
          name="flightClass"
          value={searchData.flightClass}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="w">Economy</option>
          <option value="p">Premium Economy</option>
          <option value="b">Business Class</option>
        </select>

        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default FlightBooking;
