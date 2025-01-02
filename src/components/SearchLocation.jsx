import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    border: 0px;
    border-radius: 5px;
    padding: 10px;
  }
`;

export default function SearchLocation({ type, submitSearch }) {
  const [inputAddress, setInputAddress] = useState("");

  function handleChange(event) {
    setInputAddress(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    submitSearch(inputAddress);
  }

  return (
    <Form onSubmit={(event) => handleSearch(event)}>
      <input type={type} onChange={(event) => handleChange(event)} />
      <button type="Submit">Rechercher</button>
    </Form>
  );
}
