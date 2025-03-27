const Accordion = ({ curElem , handleToggleNow}) => {
    const { id, name, description, features, category, tags } = curElem;

    const visible = `visible${id}`;
    
    const toggleNow = () => {
        return handleToggleNow(id, visible);
    }

    return (
        <div className='container bg-gray-850 shadow-white-lg p-6'>
            {/* Content Header */}
            <div className='bg-amber-500 rounded-full py-5 px-10 my-5 text-black text-2xl font-extrabold flex items-center cursor-pointer'onClick={toggleNow}>
                <div className='flex-grow'>{name}</div>
                <i className='fas fa-angle-down cursor-pointer'></i>
            </div>
            {/* Accordian-Summary  */}
            <div className='accordion-summary overflow-hidden max-h-0' id={`${visible}`}>
                <div className='rounded-lg overflow-hidden shadow-lg bg-black p-4 m-2'>
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

                    {/* Accordian-Category  */}
                    <div className="flex font-bold text-xl mb-2 p-4 py-2">Category:<h5>{category}</h5></div>
                </div>
                {/* Accordian-main  */}

                {/* Accordian-Footer  */}
                <div className="accordian-footer bg-gray-700 rounded-b-full py-5 px-10 my-5 text-gray-300 text-2xl font-extrabold flex justify-center items-center">
                    <div className="flex-grow">
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