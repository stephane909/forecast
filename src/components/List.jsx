import { useEffect, useState } from "react";
import styled from "styled-components";

const ListComp = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  li {
    list-style-type: none;
    text-align: left;
    cursor: pointer;
    transition: color 0.7s ease 0s;
    &:hover {
      color: #60e091;
    }
  }
`;

export default function List({ address, getCoords }) {
  const [addressesList, setAddressesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geocode.maps.co/search?q=${address}&api_key=67641d3d6dd36090684884wtq4d682d`,
        );
        const result = await response.json();
        setAddressesList((prev) => result);

        console.log("fetching");
      } catch (error) {
        console.log(error);
      }
    };
    if (address !== null) {
      fetchData();
    }
  }, [address]);

  if (address === null) {
    return <p>Veuillez saisir une adresse </p>;
  }

  function handleCoords(latitude, longitude) {
    getCoords(latitude, longitude);
  }

  return (
    <ListComp>
      {addressesList.map((address) => (
        <li
          key={address.place_id}
          onClick={() => handleCoords(address.lat, address.lon)}
          //data-latitude={address.lat}
          //data-longitude={address.lon}
        >
          {address.display_name}
        </li>
      ))}
    </ListComp>
  );
}
