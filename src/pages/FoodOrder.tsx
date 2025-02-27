import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, ExternalLink } from 'lucide-react';

export default function Food() {
  const [orderType, setOrderType] = useState<'hotel' | 'external' | null>(null);
  const [roomNumber, setRoomNumber] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [tip, setTip] = useState(0);

  const handleHotelOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle hotel food order
  };

  const handleExternalOrder = () => {
    window.location.href = 'https://www.zomato.com';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Food Service</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            className={`p-6 border rounded-lg cursor-pointer transition-all ${
              orderType === 'hotel'
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`}
            onClick={() => setOrderType('hotel')}
          >
            <Utensils className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-lg font-semibold text-gray-900">Hotel Room Service</h2>
            <p className="text-gray-600 mt-2">
              Order food directly to your room from our hotel kitchen
            </p>
          </div>

          <div
            className={`p-6 border rounded-lg cursor-pointer transition-all ${
              orderType === 'external'
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`}
            onClick={() => setOrderType('external')}
          >
            <ExternalLink className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-lg font-semibold text-gray-900">Order from Zomato</h2>
            <p className="text-gray-600 mt-2">
              Explore restaurants and cuisines from nearby locations
            </p>
          </div>
        </div>

        {orderType === 'hotel' && (
          <form onSubmit={handleHotelOrder} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Room Number</label>
              <input
                type="text"
                required
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Instructions
              </label>
              <textarea
                rows={3}
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Tip for Staff</label>
              <div className="mt-2 flex gap-4">
                {[5, 10, 15, 20].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setTip(amount)}
                    className={`px-4 py-2 rounded-md ${
                      tip === amount
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div><br></br>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place Order
            </button>
          </form>
        )}

        {orderType === 'external' && (
          <div className="text-center">
            <button
              onClick={handleExternalOrder}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Go to Zomato
            </button>
          </div>
        )}
      </div>
    </div>
  );
}