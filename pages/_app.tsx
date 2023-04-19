import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import { poppins, oswald } from "../components/fonts/fonts";

const GlobalStyle = createGlobalStyle`
  // variable created that can be used globally using next/font
 :root {
  --poppins-font : ${poppins.style.fontFamily};
  --oswald-font : ${oswald.style.fontFamily};
 }
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  }
  body {
    background-color: #ffffff;
    color : #000000;
    font-family: var(--oswald-font);
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
    all: unset;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
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
