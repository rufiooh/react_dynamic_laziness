import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reactLazyWithPreload } from "./reactLazyWithPreload";

const THE_MAP = {
  test1: reactLazyWithPreload(() => import("./LazyComponent")),
  test2: reactLazyWithPreload(() => import("./LazyComponent2")),
};

const StyledApp = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 1rem;
`;

const FlickerAmplifier = styled.div`
  height: 300px;
  background: black;
`;

function App() {
  const [isShowingLazyComponent, setIsShowingLazyComponent] = useState(false);
  const [oneOrTwo, setOneOrTwo] = useState<"test1" | "test2">("test1");
  const [isPreloaded, setIsPreloaded] = useState(false);

  const LazyComp = THE_MAP[oneOrTwo];

  useEffect(() => {
    if (isPreloaded) {
      THE_MAP["test2"].preload();
    }
  }, [isPreloaded]);

  return (
    <StyledApp>
      <div>(refresh page to reset)</div>
      <p>
        Currently the lazy components are part of a map, where they get loaded
        dynamically, depending on the passed map key.
      </p>
      <p>
        This - even when preloaded - causes a slight flickering when the
        component gets injected the first time
      </p>
      <h1>Lazy Loaded Component Below:</h1>
      <React.Suspense fallback={<></>}>
        {isShowingLazyComponent ? <LazyComp /> : <h4>not yet</h4>}
      </React.Suspense>
      <StyledButton
        disabled={isShowingLazyComponent}
        onClick={() => setIsShowingLazyComponent(true)}
      >
        Show Lazy Component
      </StyledButton>
      <StyledButton disabled={isPreloaded} onClick={() => setIsPreloaded(true)}>
        Preload Lazy Component 2
      </StyledButton>
      <StyledButton
        onClick={() => {
          setOneOrTwo((oneOrTwo) => (oneOrTwo === "test1" ? "test2" : "test1"));
          setIsPreloaded(true);
        }}
      >
        Switch Component {isPreloaded ? "" : "NOT"} Preloaded
      </StyledButton>

      <FlickerAmplifier />
    </StyledApp>
  );
}

export default App;
