import React, { useState } from 'react';

const TransportationOptions = () => {
    const [option, setOption] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [classType, setClassType] = useState('');

    const handleOptionClick = (selectedOption) => {
        setOption(selectedOption);
    };

    const handleSearch = () => {
        if (!source || !destination || !date) {
            alert("Please fill in all the details.");
            return;
        }

        let url = '';

        switch (option) {
            case 'train':
                url = `https://www.irctc.co.in/nget/train-search?from=${source}&to=${destination}&journeyDate=${date}&classType=${classType}`;
                break;
            case 'bus':
                url = `https://www.redbus.in/?from=${source}&to=${destination}&date=${date}&busType=${classType}`;
                break;
            case 'flight':
                url = `https://www.ixigo.com/search/result/flight/${source}-${destination}/${date}?class=${classType}`;
                break;
            default:
                break;
        }

        window.location.href = url;
    };

    return (
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold mb-6">Select Your Mode of Transport</h2>
            <div className="space-y-4">
                <button
                    onClick={() => handleOptionClick('train')}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Train
                </button>
                <button
                    onClick={() => handleOptionClick('bus')}
                    className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Bus
                </button>
                <button
                    onClick={() => handleOptionClick('flight')}
                    className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
                >
                    Flight
                </button>
            </div>

            {option && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Enter Travel Details</h3>
                    <input
                        type="text"
                        placeholder="Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <select
                        value={classType}
                        onChange={(e) => setClassType(e.target.value)}
                        className="w-full mb-3 p-2 border rounded"
                    >
                        <option value="">Select Class/Type</option>
                        {option === 'train' && (
                            <>
                                <option value="1A">First AC</option>
                                <option value="2A">Second AC</option>
                                <option value="SL">Sleeper</option>
                            </>
                        )}
                        {option === 'bus' && (
                            <>
                                <option value="sleeper">Sleeper</option>
                                <option value="semi-sleeper">Semi-Sleeper</option>
                                <option value="ac">AC</option>
                                <option value="non-ac">Non-AC</option>
                            </>
                        )}
                        {option === 'flight' && (
                            <>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </>
                        )}
                    </select>
                    <button
                        onClick={handleSearch}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Search & Book
                    </button>
                </div>
            )}
        </div>
    );
};

export default TransportationOptions;
