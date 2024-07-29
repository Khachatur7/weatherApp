import { FC } from "react";
import { IAutoComplete } from "../../types/AutoComplete";

const AutoComplete: FC<IAutoComplete> = ({ cities_list, onClick }) => {
  return (
    <div className="autocomplete_list">
      {cities_list.length > 0 ? (
        cities_list.map((city) => {
          return (
            <div
              className="autocomplete_list_item"
              onClick={() => onClick(city.name)}
              key={city.name + city.region + "auto"}
            >
              <div className="city_name">
                <span>{city.name}</span>
              </div>
              <div className="country_name">
                <span>{city.country}</span>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="not_found">
            <span>
              NOT FOUND <span style={{ fontWeight: 400 }}>(◞‸◟；)</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AutoComplete;
