import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Accordion = ({ curElem, handleToggleNow }) => {
  const { id, name, description, features, links, category, tags } = curElem;

  const visible = `visible${id}`;

  const toggleNow = () => {
    return handleToggleNow(id, visible);
  };

  return (
    <div className="container my-6 px-36">
      {/* Content Header */}
      <div
        className="bg-gradient-to-r from-orange-400 to-gray-900 rounded-full px-10 text-center text-xl font-extrabold flex items-center 
            cursor-pointer h-20"
        onClick={toggleNow}
      >
        <div className="flex-grow text-left uppercase tracking-widest text-gray-800">
          {name}
        </div>
        <i className="fas fa-angle-down cursor-pointer"></i>
      </div>
      {/* Accordian-Summary  */}
      <div
        className="accordion-summary overflow-hidden max-h-full"
        id={`${visible}`}
      >
        <div className="rounded-lg overflow-hidden p-4">
          <div className="p-4 py-2">
            {/* Accordian-Description  */}
            <div className="font-bold text-2xl mb-2">Description:</div>
            <p className="text-gray-400">
              {description}
              {/* The Weather App is a dynamic JavaScript application designed to provide users with real-time weather information. Utilizing modern web technologies, it fetches data from weather APIs to deliver accurate and up-to-date weather conditions for any specified location. The app features a clean and intuitive user interface, making it easy for users to search for current weather data, view forecasts, and receive weather-related alerts. */}
            </p>
          </div>

          {/* Accordian-Features  */}
          <div className="p-4 py-2 text-2xl mb-2">
            <div className="space-x-2">
            <span className="font-bold">Features:</span>
              {features.map((feature, index) => {
                return (
                  <span key={index} className="capitalize text-xl bg-clip-text text-transparent bg-gradient-to-tr from-gray-50 to-orange-300">
                    {feature},
                  </span>
                );
              })}
            </div>
          </div>

          {/* Accordian-links  */}
          <div className="p-4 py-2 text-2xl mb-2">
            <div className="font-bold text-xl mb-2">Links:</div>
            <div className="flex flex-col space-y-4">
              {Object.entries(links).map(([key, value]) => (
                <p key={key} className="text-gray-400 text-lg">
                  <span style={{ textTransform: "capitalize", color: "cyan" }}>
                    {key}:
                  </span>
                  <a
                    href={value}
                    target="_blank"
                    rel="noreferrer"
                    className="lowercase"
                  >
                    {value}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Accordian-Category  */}
          <div className="flex font-bold text-xl mb-2 p-4 py-2">
            Category:<h5>{category}</h5>
          </div>
        </div>

        {/* Accordian-Footer  */}
        <div className="bg-gradient-to-l from-orange-400 to-gray-900 rounded-b-full h-20 flex items-center">
          <div className="flex flex-row ms-10 space-x-4 tracking-wider text-lg">
            {tags.map((tag, index) => {
              return (
                <span key={index} className="capitalize text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-gray-50 to-orange-300">
                  {tag}
                </span>
              );
            })}
          </div>
          <FaAngleUp className="" onClick={toggleNow} />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
