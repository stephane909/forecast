import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Item = styled.div`
  border: 1px solid #fff;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    text-align: left;
  }
`;

export default function ForecastingItem({ time, weather }) {
  let formattedDate = moment(time).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <Item>
      <span>{formattedDate}</span>
      <div>
        <span>
          Température ressentie : {Math.round(weather.feels_like - 273.15)}°
        </span>
        <span>Humidité : {weather.humidity}</span>
        <span>Pression athmosphérique : {weather.pressure}</span>
        <span>Température moyenne : {Math.round(weather.temp - 273.15)}°</span>
        <span>Température min : {Math.round(weather.temp_min - 273.15)}°</span>
        <span>Température max : {Math.round(weather.temp_max - 273.15)}°</span>
      </div>
    </Item>
  );
}
