import { useState, useEffect } from "react";
import styled from "styled-components";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsLoading(false); // Set isLoading to false on route completion
    };

    // Event listener for route change completion
    window.addEventListener("load", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("load", handleRouteChangeComplete);
    };
  }, []);

  return isLoading ? (
    <PreloaderWrapper id="preloader">
      <div className="preloader-content">
        {isLoading ? <h2>Loading...</h2> : null}
      </div>
    </PreloaderWrapper> 
  ) : null;
};

export default Preloader;

const PreloaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
