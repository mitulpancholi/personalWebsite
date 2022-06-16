import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Clamp from "../lib/Clamp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mitul Pancholi</title>
        <meta name="description" content="Personal Website/Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeSection>
          <StyledHeading>
            creative
            <br />
            developer
          </StyledHeading>
        </HomeSection>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;

const StyledHeading = styled.h1`
  font-size: ${Clamp(1,19)};
  text-transform: uppercase;
  line-height: 80%;
`;



const HomeSection = styled.section`
  height: calc(100vh - 61px);
  min-height: 768px;
  display: flex;
  align-items: flex-end;
`;
