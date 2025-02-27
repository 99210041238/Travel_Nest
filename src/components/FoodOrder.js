import { useState } from "react";

const OrderFood = () => {
  const [inHotel, setInHotel] = useState(null);
  const [foodOption, setFoodOption] = useState(null);
  const [menu, setMenu] = useState([]);

  // Dummy hotel menu (replace with real API)
  const fetchMenu = () => {
    const hotelMenu = [
      { id: 1, name: "Paneer Butter Masala", price: 250 },
      { id: 2, name: "Veg Biryani", price: 180 },
      { id: 3, name: "Chicken Curry", price: 320 },
    ];
    setMenu(hotelMenu.length > 0 ? hotelMenu : null);
  };

  // Handle hotel stay selection
  const handleHotelSelection = (choice) => {
    setInHotel(choice);
    if (!choice) {
      window.location.href = "https://www.zomato.com";
    }
  };

  // Handle food option selection
  const handleFoodOption = (option) => {
    setFoodOption(option);
    if (option === "hotel") {
      fetchMenu();
    } else {
      window.location.href = "https://www.zomato.com";
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Food</h2>

      {inHotel === null && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">Are you still in the hotel?</p>
          <button
            onClick={() => handleHotelSelection(true)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => handleHotelSelection(false)}
            className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            No (Go to Zomato)
          </button>
        </div>
      )}

      {inHotel && foodOption === null && (
        <div className="bg-gray-100 p-4 mt-4 rounded-lg">
          <p className="text-lg font-semibold">Do you want food from:</p>
          <button
            onClick={() => handleFoodOption("hotel")}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Hotel
          </button>
          <button
            onClick={() => handleFoodOption("outside")}
            className="mt-2 ml-2 bg-orange-500 text-white px-4 py-2 rounded"
          >
            Outside (Go to Zomato)
          </button>
        </div>
      )}

      {foodOption === "hotel" && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Hotel Menu:</h3>
          {menu ? (
            menu.map((item) => (
              <div key={item.id} className="border p-2 mt-2">
                <p>{item.name} - ₹{item.price}</p>
              </div>
            ))
          ) : (
            <p className="text-red-500 mt-2">
              Sorry, this hotel is not providing food. Please book online.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderFood;
