import type { AppProps } from "next/app";
import isPropValid from "@emotion/is-prop-valid";
import styled, { createGlobalStyle, StyleSheetManager } from "styled-components";
import Header from "../components/Header";
import { poppins, oswald } from "../components/fonts/fonts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
// import Router from 'next/router';
// import Preloader from '../components/preloader';

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
    /* text-decoration: none; */
    &:hover {
      text-decoration: none;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production";
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, isProduction]);

  const showHeader = router.pathname.startsWith("/studio");

  return (
    <>
      <GlobalStyle />
      {/* Custom Preloader on first page load */}
      {/* <Preloader /> */}
      {showHeader ? (
        <Component {...pageProps} />
      ) : (
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop) && prop !== "openMenu"}>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </StyleSheetManager>
      )}
    </>
  );
}

export default MyApp;

const Container = styled.div`
  padding: 0px 20px;
`;
