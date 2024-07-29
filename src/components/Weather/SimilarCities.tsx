import { FC, useState } from "react";
import { IAutoComplete } from "../../types/AutoComplete";

const SimilarCities: FC<IAutoComplete> = ({ cities_list, onClick }) => {
    let [showSimilarCities, setShowSimilarCities] = useState<boolean>(false);

    return (
        <div className="similar_cotalog"
        id={showSimilarCities ? "show" : "hidden"}>
            <div
                className="sim_cities_list"
            >
                {cities_list.map((city) => {
                    return (
                        <div
                            className="sim_cities_list_item"
                            onClick={() => onClick(city.name)}
                            key={city.name + city.region + "similar"}
                        >
                            <div className="city_name">
                                <span>{city.name}</span>
                            </div>
                            <div className="country_name">
                                <span>{city.country}</span>
                            </div>
                        </div>
                    );
                })}

            </div>
            <button
                className="show_similar_cities_bttn"
                onClick={() => setShowSimilarCities(!showSimilarCities)}
            >
                {" "}
                <span>similar</span>
            </button>
        </div>
    );
};

export default SimilarCities;
