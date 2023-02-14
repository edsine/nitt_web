import styled from "styled-components";
import * as React from "react";

const InputBase = styled.input`
  padding: 10px 20px;
`;

export const Input = ({ text }) => {
  return <InputBase>{text}</InputBase>;
};
