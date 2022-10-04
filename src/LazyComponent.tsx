import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: green;
`;

const LazyComponent = () => {
  return <StyledH2>Lazy Loaded Component 1</StyledH2>;
};

export default LazyComponent;
