import { useEffect, useState, memo } from "react";
import ForecastingList from "./ForecastingList";
import styled from "styled-components";

const ForecastTable = styled.div`
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
`;

const ForecastResult = memo(function ForecastResult({ coordsToCheck }) {
  const [datas, setDatas] = useState(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          //`https://api.openweathermap.org/data/2.5/weather?q=${location},fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordsToCheck.lat}&lon=${coordsToCheck.lon}&appid=c21a75b667d6f7abb81f118dcf8d4611`,
        );
        const result = await response.json();
        setDatas(result.list);
        setLocation(result.city);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    // Si location existe
    if (coordsToCheck.lat !== "" && coordsToCheck.lon !== "") {
      fetchData();
      setIsResult(true);
    }
  }, [coordsToCheck]);

  if (isResult !== true) {
    return <p>no data</p>;
  }

  return (
    <ForecastTable>
      <div>
        <p>ville:{location.name}</p>
      </div>
      <ForecastingList forecastDatas={datas} />
    </ForecastTable>
  );
});

export default ForecastResult;
