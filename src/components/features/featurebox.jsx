import React from 'react';
import { useState } from 'react'
import Accordion from './accordion';
// import { getData } from '../../api/GetData';
import { getData } from '../../api/localData';

const FeatureBox = () => {

    const data = getData();
    const [toggleMain, setToggleMain] = useState(false);

    const toggleVisibility = () => {
        setToggleMain(!toggleMain);
    }
    
    const handleToggleNow = () => {
        return console.log('clicked');
        // const toggleDynamic = (content) => {
        //     // e.preventDefault();
        //     if (content.classList.contains('max-h-0')) {
        //         content.classList.remove('max-h-0');
        //         content.classList.add('max-h-full');
        //     } else {
        //         content.classList.remove('max-h-full');
        //         content.classList.add('max-h-0');
        //     }
        // }
        // const accordionContent = document.querySelector('.accordion-summary');
        // toggleDynamic(accordionContent);
    }

    return (
        <>
            {/* Weather App */}
            <div className='container bg-gray-850 shadow-white-lg p-6'>
                {/* Content Header */}
                <div className='bg-amber-500 rounded-full py-5 px-10 my-5 text-black text-2xl font-extrabold flex items-center cursor-pointer' onClick={toggleVisibility}>
                    <div className='flex-grow'>Weather App</div>
                    <i className='fas fa-angle-down cursor-pointer'></i>
                </div>
                {/* Accordian-Summary  */}
                <div className={`accordion-summary overflow-hidden ${toggleMain ? 'max-h-full' : 'max-h-0'}`}>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-black p-4 m-2'>
                        <div className="p-4 py-2">
                            {/* Accordian-Description  */}
                            <div className="font-bold text-2xl mb-2">Description:</div>
                            <p className="text-gray-400 text-lg">
                                The Weather App is a dynamic JavaScript application designed to provide users with real-time weather information. Utilizing modern web technologies, it fetches data from weather APIs to deliver accurate and up-to-date weather conditions for any specified location. The app features a clean and intuitive user interface, making it easy for users to search for current weather data, view forecasts, and receive weather-related alerts.
                            </p>
                        </div>
                        {/* Accordian-Features  */}
                        <div className="p-4 py-2 text-2xl mb-2">
                            <div className="font-bold text-xl mb-2">Features:</div>
                            <div className='flex flex-col space-y-4'>
                                <p className="text-gray-400 text-lg">
                                    Real-time Weather Data:Fetches current weather conditions, including temperature, humidity, wind speed, and more.
                                </p>
                                <p className='text-gray-400 text-lg'>
                                    Location-based Search: Users can search for weather information by entering city names or ZIP codes.
                                </p>
                                <p className="text-gray-400 text-lg">
                                    Weather Forecast: Provides detailed weather forecasts for the next few days, helping users plan ahead.
                                </p>
                                <p className="text-gray-400 text-lg">
                                    Responsive Design: Optimized for various devices, ensuring a seamless user experience on desktops, tablets, and smartphones.
                                </p>
                                <p className="text-gray-400 text-lg">
                                    User-friendly Interface: Simplified design for easy navigation and quick access to essential weather details.
                                </p>
                                <p className="text-gray-400 text-lg">
                                    Alerts and Notifications: Displays important weather alerts and notifications to keep users informed of severe weather conditions.
                                    The Weather App leverages the power of JavaScript, along with HTML and CSS, to create an interactive and visually appealing application. Its integration with weather APIs ensures that users receive the most accurate and reliable weather information available. Whether you need to check the weather for your daily commute or plan for an outdoor event, the Weather App has you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Accordian-main  */}

                    {/* Accordian-Footer  */}
                    <div className="accordian-footer bg-gray-700 rounded-b-full py-5 px-10 my-5 text-gray-300 text-2xl font-extrabold flex justify-center items-center">
                        <div className="flex-grow">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
                        </div>
                        <i className='fas fa-angle-up cursor-pointer' onClick={toggleVisibility}></i>
                    </div>
                </div>
            </div>
            {/* Weather App */}

            <div>
                {
                    data.map((curElem) => {
                        return <Accordion key={curElem.id} curElem={curElem} handleToggleNow={handleToggleNow}/>
                    })
                }
            </div>
        </>
    )
}

export default FeatureBox

