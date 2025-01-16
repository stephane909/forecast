import { useState } from "react";

import ForecastingItem from "./ForecastingItem";

export default function ForecastingList({ forecastDatas }) {
  return (
    <div>
      {forecastDatas &&
        forecastDatas.map((forecast) => {
          return (
            <ForecastingItem
              key={forecast.dt_txt}
              time={forecast.dt_txt}
              weather={forecast.main}
            />
          );
        })}
    </div>
  );
}
