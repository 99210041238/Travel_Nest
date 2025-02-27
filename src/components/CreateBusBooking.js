import { useState } from "react";

const BusBooking = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [passengers, setPassengers] = useState([
    { name: "", phone: "", gender: "", age: "" },
  ]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  // Handle passenger detail input
  const handlePassengerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  // Add another passenger
  const addPassenger = () => {
    setPassengers([...passengers, { name: "", phone: "", gender: "", age: "" }]);
  };

  // Redirect with encoded URL
  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      from: searchData.from,
      to: searchData.to,
      date: searchData.date,
      passengers: JSON.stringify(passengers),
    }).toString();

    const encodedUrl = `https://www.abhibus.com/bus_search/${encodeURIComponent(searchData.from)}/3/${encodeURIComponent(searchData.to)}/7/${encodeURIComponent(searchData.date)}/O?${queryParams}`;
    
    window.location.href = encodedUrl;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Bus</h2>

      {/* Bus Search Form */}
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
      </div>

      {/* Passenger Details Form */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Passenger Details:</h3>
        {passengers.map((passenger, index) => (
          <div key={index} className="bg-gray-100 p-4 mt-2 rounded-lg">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={passenger.name}
              onChange={(e) => handlePassengerChange(index, e)}
              className="border p-2 w-full rounded"
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={passenger.phone}
              onChange={(e) => handlePassengerChange(index, e)}
              className="border p-2 w-full rounded"
            />

            <label>Gender:</label>
            <select
              name="gender"
              value={passenger.gender}
              onChange={(e) => handlePassengerChange(index, e)}
              className="border p-2 w-full rounded"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={passenger.age}
              onChange={(e) => handlePassengerChange(index, e)}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}

        <button
          onClick={addPassenger}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          + Add Person
        </button>

        <button
          onClick={handleContinue}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue to Bus Booking
        </button>
      </div>
    </div>
  );
};

export default BusBooking;
