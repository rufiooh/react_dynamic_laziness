import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: blue;
`;

const LazyComponent = () => {
  return <StyledH2>Lazy Loaded Component 2</StyledH2>;
};

export default LazyComponent;
