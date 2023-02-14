import styled from "styled-components";
import * as React from "react";

const ButtonBase = styled.button`
  background-color: ${(props) => props.bg || "#00B87C"};
`;

export const Button = ({ text, ...props }) => {
  return <ButtonBase {...props}>{text}</ButtonBase>;
};
