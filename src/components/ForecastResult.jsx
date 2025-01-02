import { useEffect, useState } from "react";
import styled from "styled-components";

const ForecastTable = styled.div`
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
`;

export default function ForecastResult({ coordsToCheck }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          //`https://api.openweathermap.org/data/2.5/weather?q=${location},fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordsToCheck.lat}&lon=${coordsToCheck.lon}&appid=c21a75b667d6f7abb81f118dcf8d4611`,
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    // Si location existe
    if (coordsToCheck) {
      fetchData();
    }
  }, [coordsToCheck]);

  console.log(data);

  return (
    <ForecastTable>
      <div>Weather</div>
    </ForecastTable>
  );
}
