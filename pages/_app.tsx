import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-Bold.ttf") format('.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-SemiBold.ttf") format('.ttf');
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-Medium.ttf") format('.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-Regular.ttf") format('.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-Light.ttf") format('.ttf');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'oswald', sans-serif;
    src: url("../styles/fonts/Oswald-ExtraLight.ttf") format('.ttf');
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'oswald', sans-serif;
  user-select: none;
  }
  body {
    /* background-color: #E5E5E5; */
    background-color: #041C32;
    color : #ECB365;
    height: 100%;
    width: 100%;
    position: relative;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;
 /* Firefox */
    ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }
}

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'oswald';
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;

const Container = styled.div`
  padding: 0px 20px;
`;
