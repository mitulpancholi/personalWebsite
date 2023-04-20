import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import About from "../components/home/about";
import Intro from "../components/home/intro";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";
import Project from "../components/home/project";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mitul Pancholi | Portfolio</title>
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
        <Project />
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
  @media ${devices.tablet} {
    span {
      ::before {
        margin-bottom: -18px;
      }
    }
  }
  grid-column-start: 11;
  grid-column-end: 12;
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
      margin-top: 0;
    }
    ::after {
      margin-bottom: 0;
    }
  }
`;

const ShortDesc = styled.span`
  @media ${devices.tablet} {
  grid-column-start: 6;
  align-items: flex-end;
  
  }
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${Clamp(1, 2)};
  grid-row: 1/2;
  grid-column-start: 1;
  grid-column-end: 11;
`;
