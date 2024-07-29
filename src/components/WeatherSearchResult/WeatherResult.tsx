import "./WeatherResult.css"
import { IWeatherCityInfo } from "../../types/cityInfoData";
import WindSVG from "../../images/wind.svg";
import PressureSVG from "../../images/pressure.svg";
import HumiditySVG from "../../images/humidity.svg";
import VisibilitySVG from "../../images/visibility.svg";
import { weather_icons_name } from "../../constants/weather_icons_name";
import { weather_icons } from "../../constants/weather_icons";
import { FC } from "react";

interface ICityInfo {
    cityWeatherInfo: IWeatherCityInfo | null;
}

const WeatherResult: FC<ICityInfo> = ({ cityWeatherInfo }) => {
    let c = cityWeatherInfo?.current;
    let l = cityWeatherInfo?.location;
    let wind_ms = Math.round(c?.wind_kph ? c?.wind_kph * 0.277778 : 0)
console.log(cityWeatherInfo);


    return (
        <div className="result_of_city_weather"> 
            {c && l ? <div className="weather_info">

                <div className="city" id="city">
                    <span>Weather in {l?.name}</span>
                </div>
                <div className="weather">
                    <div className="temp">
                        <div className="temp_num" id="temp_num">
                            <span>{c?.temp_c}</span>
                            <span className="celc">°</span>C
                        </div>
                        <div className="icon" id="icon">
                            <img
                                src={
                                    weather_icons_name.includes(c?.condition.text + "")
                                        ? weather_icons[
                                        weather_icons_name.indexOf(c?.condition.text + "")
                                        ]
                                        : c?.condition.icon
                                }
                                alt=""
                            />
                        </div>
                        <div className="cond_feels" id="cond_feels">
                            <span>{c?.condition.text}</span>
                            <span>
                                Feels like: {c?.feelslike_c} <span className="celc">°</span>C
                            </span>
                        </div>
                    </div>
                    <div className="additionally">
                        <div className="wind" id="wind">
                            <img src={WindSVG} alt="wind" />
                            <span>{wind_ms} m/s</span>
                            <span>{c?.wind_dir}</span>
                        </div>
                        <div className="pressure" id="pressure">
                            <img src={PressureSVG} alt="pressure" />{" "}
                            <span>{c?.pressure_mb}</span> mm Hg
                        </div>
                        <div className="humidity" id="humidity">
                            <img src={HumiditySVG} alt="humidity" /> <span>{c?.humidity}</span>%
                        </div>
                        <div className="visibility" id="visibility">
                            <img src={VisibilitySVG} alt="visibility" />{" "}
                            <span>{c?.vis_km}</span>km
                        </div>
                    </div>
                    <div className="region">
                        <span>
                            {l?.name} in {l?.region} {l?.country}
                        </span>
                    </div>
                </div>
            </div> : <div className="city_was_not_found">
                <span>City was Not Found (◞‸◟；)</span>
            </div>}
        </div>
    );
};

export default WeatherResult;
