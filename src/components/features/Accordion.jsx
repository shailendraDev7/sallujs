const Accordion = ({ curElem, handleToggleNow }) => {
    const { id, name, description, features, links, category, tags } = curElem;

    const visible = `visible${id}`;

    const toggleNow = () => {
        return handleToggleNow(id, visible);
    }

    return (
        <div className='container my-6 px-36'>
            {/* Content Header */}
            <div className='bg-gradient-to-r from-orange-400 to-gray-900 rounded-full px-10 text-center text-xl font-extrabold flex items-center 
            cursor-pointer h-20' onClick={toggleNow}>
                <div className='flex-grow text-left uppercase tracking-wider text-gray-800'>{name}</div>
                <i className='fas fa-angle-down cursor-pointer'></i>
            </div>
            {/* Accordian-Summary  */}
            <div className='accordion-summary px-10 overflow-hidden max-h-full' id={`${visible}`}>
                <div className='rounded-lg overflow-hidden p-4 m-2'>
                    <div className="p-4 py-2">
                        {/* Accordian-Description  */}
                        <div className="font-bold text-2xl mb-2">Description:</div>
                        <p className="text-gray-400 text-lg">
                            {description}
                            {/* The Weather App is a dynamic JavaScript application designed to provide users with real-time weather information. Utilizing modern web technologies, it fetches data from weather APIs to deliver accurate and up-to-date weather conditions for any specified location. The app features a clean and intuitive user interface, making it easy for users to search for current weather data, view forecasts, and receive weather-related alerts. */}
                        </p>
                    </div>

                    {/* Accordian-Features  */}
                    <div className="p-4 py-2 text-2xl mb-2">
                        <div className="font-bold text-xl mb-2">Features:</div>
                        <div className='flex flex-col space-y-4'>

                            {/* Starting Features */}
                            {features.map((feature, index) => {
                                return (
                                    <p key={index} className="text-gray-400 text-lg">
                                        {feature}
                                    </p>
                                )
                            })}
                        </div>
                    </div>


                    {/* Accordian-links  */}
                    <div className="p-4 py-2 text-2xl mb-2">
                        <div className="font-bold text-xl mb-2">Links:</div>
                        <div className='flex flex-col space-y-4'>

                            {/* Starting Features */}
                            {console.log(links)}
                            {Object.entries(links).map(([key, value]) => (
                                <p key={key} className="text-gray-400 text-lg">
                                    <span style={{ textTransform: 'capitalize', color: 'cyan' }}>{key}:</span>
                                    <a href={value} target="_blank" rel="noreferrer" className="lowercase">{value}</a>
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Accordian-Category  */}
                    <div className="flex font-bold text-xl mb-2 p-4 py-2">Category:<h5>{category}</h5></div>
                </div>
                {/* Accordian-main  */}

                {/* Accordian-Footer  */}
                <div className="accordian-footer bg-gradient-to-l from-orange-400 to-gray-900 rounded-b-full h-24 text-gray-300 text-2xl font-extrabold flex justify-center items-center">
                    <div className="flex-grow text-right mr-10">
                        {tags.map((tag, index) => {
                            return (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                            )
                        })}
                    </div>
                    <i className='fas fa-angle-up cursor-pointer' onClick={toggleNow}></i>
                </div>
            </div>
        </div>

    )
}

export default Accordion;