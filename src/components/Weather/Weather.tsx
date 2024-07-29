import { FC, useEffect, useState } from "react";
import "./Weather.css";
import BG from "../../images/weather_bg.mp4";
import { url } from "../../constants/url";
import { api_key } from "../../constants/api_key";
import WeatherResult from "../WeatherSearchResult/WeatherResult";
import { IWeatherCityInfo } from "../../types/cityInfoData";
import AutoComplete from "./AutoComplete";
import Loader from "../Loader/Loader";
import { auto_complete_url } from "../../constants/auto_complete_url";
import { useDebounce } from "../../hooks/useDebounce";
import SimilarCities from "./SimilarCities";

const Weather: FC = () => {
  let [inputValue, setInputValue] = useState<string>("");
  let [cityWeatherInfo, setCityWeatherInfo] = useState<IWeatherCityInfo | null>(
    null
  );
  let [error, setError] = useState<string | boolean>(false);
  let [loader, setLoader] = useState<boolean>(false);
  let debounceValue = useDebounce(inputValue, 500);
  let [autoComplete, setAutoComplete] = useState<[] | null>();
  let [similarCities, setSimilarCities] = useState<[] | null>();
  useEffect(() => {
    if (debounceValue) {
      SearchSimilarCities(debounceValue);
    }
  }, [debounceValue]);

  async function FetchCityWeatherInfo(value: string | undefined) {
    if (value && value?.length >= 2) {
      try {
        let resUrl: string = `${url}?key=${api_key}&q=${value?.toLowerCase()}`;
        let delay = Math.ceil(Math.random() * (2000 - 1000) + 2000);
        const data = await fetch(resUrl);
        const res = await data.json();
        setError(false);
        autoComplete && setSimilarCities(autoComplete);
        setAutoComplete(null);
        setInputValue("");
        setLoader(true);
        return setTimeout(() => {
          setCityWeatherInfo(res);
          setLoader((prev) => !prev);
        }, delay);
      } catch (error) {
        return error;
      }
    } else {
      return setError(
        "the name of the city cannot consist of less than 2 letters"
      );
    }
  }

  async function SearchSimilarCities(value: string) {
    let resUrl: string = `${auto_complete_url}?key=${api_key}&q=${value}`;
    if (value.length >= 2 && value.length <= 50) {
      fetch(resUrl)
        .then((res) => res.json())
        .then((res) => setAutoComplete(res));
    }
  }

  return (
    <div className="all_weather_component">
      <div className="container">
        <div className="video_bg">
          <video autoPlay loop muted>
            <source src={BG} />
          </video>
        </div>
        <div className="search_city">
        <div className="searcher">
          <input
            type="text"
            className={"input weather_searcher_input"}
            placeholder="Name of city"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className={`bttn weather_searcher_bttn`}
            onClick={() => FetchCityWeatherInfo(inputValue)}
          >
            Search
          </button>
        </div>
        {error && (
          <>
            {" "}
            <div className="error">
              <span>{error}</span>
            </div>
          </>
        )}
        {autoComplete && (
          <>
            {" "}
            <AutoComplete
              cities_list={autoComplete}
              onClick={FetchCityWeatherInfo}
            />
          </>
        )}
      </div>
        {similarCities && (
          <>
            <SimilarCities
              cities_list={similarCities}
              onClick={FetchCityWeatherInfo}
            />
          </>
        )}
        {cityWeatherInfo && !loader && (
          <WeatherResult cityWeatherInfo={cityWeatherInfo} />
        )}
        {loader && <Loader />}
      </div>
    </div>
  );
};

export default Weather;
