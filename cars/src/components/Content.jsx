import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendar, FaUser, FaGasPump } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Content = () => {
  const [array, setArray] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const url = 'https://cars-backend-production.up.railway.app/api/getmain/';
  const [fuelType, setFuelType] = useState('');
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setArray(res.data);
      setFilteredArray(res.data);
    });
  }, [url]);

  useEffect(() => {
    updateFilteredArray(fuelType, company, model);
  }, [fuelType, company, model]);

  const updateFilteredArray = (fuelType, company, model) => {
    let filteredData = array;

    if (fuelType !== '') {
      filteredData = filteredData.filter((car) => car.fuel_type === fuelType);
    }

    if (company !== '') {
      filteredData = filteredData.filter(
        (car) => car.company.toLowerCase().includes(company.toLowerCase())
      );
    }

    if (model !== '') {
      filteredData = filteredData.filter(
        (car) => car.model.toLowerCase().includes(model.toLowerCase())
      );
    }

    setFilteredArray(filteredData);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const closeCarDetails = () => {
    setSelectedCar(null);
  };

  const handleFuelTypeChange = (type) => {
    setFuelType(type);
  };

  const handleCompanyChange = (event) => {
    const value = event.target.value;
    setCompany(value);
  };

  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  };

  return (
    <>
      <div className="flex flex-col mt-52 md:flex-row w-full ">
        <div className="ml-4 mb-4 md:flex md:space-x-4">
          <button
            className={`border border-blue-600 rounded-3xl pl-3 pr-3 pt-1 pb-1 ${
              fuelType === 'petrol' ? 'bg-slate-100 border-slate-400' : ''
            }`}
            onClick={() => handleFuelTypeChange('petrol')}
          >
            <FaGasPump className="inline-block mr-1" /> Petrol
          </button>
          <button
            className={`border border-blue-600 rounded-3xl pl-3 pr-3 pt-1 pb-1 ${
              fuelType === 'diesel' ? 'bg-slate-100 border-slate-400' : ''
            }`}
            onClick={() => handleFuelTypeChange('diesel')}
          >
            <FaGasPump className="inline-block mr-1" /> Diesel
          </button>
        </div>
        <div className="ml-4 mr-6 mt-4 md:mt-0 md:flex md:space-x-4">
          <div className="flex items-center">
            <div className="relative">
              <FaSearch className="absolute left-2 top-1/3 transform -translate-y-1/2 text-gray-700" />
              <input
                type="text"
                placeholder="Enter Brand"
                className="pl-8 pt-1 pb-1 border rounded-2xl border-black mr-3 mb-3"
                value={company}
                onChange={handleCompanyChange}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <FaSearch className="absolute left-2 top-1/3 transform -translate-y-1/2 text-gray-700" />
              <input
                type="text"
                placeholder="Enter Name"
                className="pl-8 pt-1 pb-1 border rounded-2xl border-black mr-3 mb-3"
                value={model}
                onChange={handleModelChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-24 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg">
          {filteredArray.map((car) => (
            <div
              key={car.id}
              className="flex flex-col shadow-xl items-center m-4 border-2 bg-slate-200 rounded-lg hover:bg-slate-300"
              onClick={() => handleCarClick(car)}
            >
              <div className="w-full h-64 overflow-hidden">
                <img className="object-cover mb-2 w-full h-2/3" src={car.car_image} alt="img" />
                <div className="flex flex-col justify-between px-2 pt-1">
                  <div>
                    <p className="text-md font-custom font-bold text-lg mb-3">
                      {car.company.charAt(0).toUpperCase() + car.company.slice(1)}{' '}
                      {car.model.charAt(0).toUpperCase() + car.model.slice(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="text-gray-700">
                        <FaGasPump className="inline-block mr-1" />
                      </span>
                      {car.fuel_type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedCar && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-slate-200 rounded-lg p-4">
              <div>
                <img className="w-full h-72 object-cover mb-4" src={selectedCar.car_image} alt="car" />
                <h2 className="text-2xl mb-2">
                  {selectedCar.company} {selectedCar.model}
                </h2>
                <p className="text-gray-700 flex items-center">
                  <FaCalendar className="mr-2" /> Date of Registration: {selectedCar.year_of_registration}
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaUser className="mr-2" /> Number of Owners: {selectedCar.number_of_owners}
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaGasPump className="mr-2" /> Total KM: {selectedCar.total_km}
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaGasPump className="mr-2" /> Fuel Type: {selectedCar.fuel_type}
                </p>
              </div>
              <button
                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 mt-4"
                onClick={closeCarDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
