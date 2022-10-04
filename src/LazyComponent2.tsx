import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: blue;
`;

const LazyComponent2 = () => {
  return (
    <div>
      <StyledH2>Lazy Loaded Component 2</StyledH2>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

export default LazyComponent2;
