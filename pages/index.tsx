import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import About from "../components/home/about";
import Intro from "../components/home/intro";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mitul Pancholi</title>
        <meta
          name="description"
          content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mitulpancholi.com" />
        <meta property="twitter:title" content="Mitul Pancholi" />
        <meta
          property="twitter:description"
          content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches"
        />
        {/* <meta property="twitter:image" content="imagepath here" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mitulpancholi.com" />
        <meta property="og:title" content="Mitul Pancholi" />
        <meta property="og:description" content="I am ReactJs / NextJs Expert focusing on creative developement, Working with the industry for last 5+ years with UI designer / Agency / Product Engineer Creating to create memorable website's. My Skillset includes ReactJs, NextJs, Gatsby, GraphQL, Apollo, Framer-motion, GSAP, Styled-components and Stiches" />
        {/* <meta property="og:image" content="Image Path here" /> */}
        <meta name="theme-color" content="#e5e5e5" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Description>
          <ArrowWrapper>
            <span>↓</span>
          </ArrowWrapper>
          <ShortDesc>
            I support designers and agencies with creative developement
          </ShortDesc>
        </Description>
        <About />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;

const Description = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: ${Clamp(1, 4)};
`;

const ArrowWrapper = styled.span`
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: ${Clamp(4, 8)};
  font-weight: 700;
  text-align: center;
  span {
    ::before,
    ::after {
      content: "";
      display: block;
      height: 0;
      width: 0;
    }
    ::before {
      margin-top: -18px;
    }
    ::after {
      margin-bottom: 0;
    }
  }
`;

const ShortDesc = styled.span`
  @media ${devices.tablet} {
    grid-column-start: 3;
    grid-column-end: 7;
  }
  text-transform: uppercase;
  font-size: ${Clamp(1, 2)};
  grid-column-start: 4;
  grid-column-end: 12;
`;
