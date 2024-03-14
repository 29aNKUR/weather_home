import BlackBarsFrame from "../components/BlackBarsFrame";
import BasicShapeText from "../components/BasicShapeText";
import FrameComponent from "../components/FrameComponent";
import { useEffect, useState } from "react";


const IPhoneMini = () => {

  const [weatherData, setWeatherData] = useState({
    city: "",
    country: "",
    date: "",
    weather: {
      icon: "",
      description: "",
    },
  });
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=22a64c7875a8483aab24ae8b693f99dc`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        console.log(data);
        // Update weatherData state with API response
        setWeatherData({
          city: data.name,
          country: data.sys.country,
          date: new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          weather: {
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          },
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

    return () => {
      // Cleanup function if needed
    };
  }, []);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[48px_0px] tracking-[normal]">
      <div className="self-stretch h-[812px] relative bg-white hidden z-[0]" />
      <BlackBarsFrame weatherData={weatherData}/>
      <img
        className="w-full h-[159px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/group-6.svg"
      />
      <BasicShapeText weatherData={weatherData}/>
      <FrameComponent weatherData={weatherData}/>
      <footer className="self-stretch flex flex-row items-start justify-center pt-5 pb-[9px] pr-5 pl-[21px] shrink-0 z-[1]">
        <div className="h-[5px] w-[134px] relative rounded-81xl bg-black" />
      </footer>
    </div>
  );
};

export default IPhoneMini;
