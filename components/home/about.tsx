import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import { devices } from "../../styles/media/device";

const About = () => {
  return (
    <AboutWrapper>
      <PageNumber>01/</PageNumber>
      <AboutDescWrapper>
        <MyIntro>
          PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION
          OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB
          EXPERIENCES.
        </MyIntro>
        <MyHobby>
          WHEN I&apos;M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I&apos;M
          PROBABLY PLAYING GAMES OR FLYING DRONES.
        </MyHobby>
      </AboutDescWrapper>
      <IntroText>A harmonious fusion of user interface wizardry and product engineering prowess.</IntroText>
      <IntroDescWrapper>
        <p>
          As a design aficionado, I collaborate closely with teams who share my
          passion for innovation, crafting captivating websites and microsites
          that elevate the online presence of both companies and individuals. My
          extensive tenure on product teams has honed my ability to orchestrate
          engineering efforts and drive projects to success.
        </p>
        <p>
          With my 6+ years of experience in Frontend Developement, I solve product
          problems and build appealing usable web experiences.
        </p>
      </IntroDescWrapper>
      {/* <AboutLink>More about me and services</AboutLink> */}
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.section`
  @media ${devices.tablet} {
    grid-template-columns: repeat(12, 1fr);
  }
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  padding-top: ${Clamp(4, 12)};
`;

const PageNumber = styled.div`
  @media ${devices.tablet} {
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: center;
  }
  grid-column-start: 1;
  grid-column-end: 7;
  font-size: ${Clamp(1.5, 2)};
`;

const AboutDescWrapper = styled.article`
  @media ${devices.tablet} {
    grid-column-start: 4;
    grid-column-end: 11;
    margin-bottom: 100px;
  }
  grid-column-start: 1;
  grid-column-end: 7;
  font-size: ${Clamp(1, 2)};
  margin-bottom: 60px;
`;

const MyIntro = styled.p``;

const MyHobby = styled.p`
  padding-top: 60px;
`;

const IntroText = styled.span`
  text-transform: uppercase;
  font-family: var(--poppins-font);
  @media ${devices.tablet} {
    grid-column-start: 4;
    grid-column-end: 7;
  }
  font-size: ${Clamp(1, 1.5)};
  grid-column-start: 1;
  grid-column-end: 7;
  font-weight: 500;
`;

const IntroDescWrapper = styled.div`
  font-family: var(--poppins-font);
  letter-spacing: 1px;
  @media ${devices.tablet} {
    grid-column-start: 7;
    grid-column-end: 11;
  }
  grid-column-start: 1;
  grid-column-end: 7;
  p {
    font-size: ${Clamp(1, 1.25)};
    margin-bottom: 30px;
    font-weight: 400;
  }
`;

const AboutLink = styled.p`
  font-family: var(--poppins-font);
  @media ${devices.tablet} {
    grid-column-start: 7;
    grid-column-end: 11;
  }
  grid-column-start: 1;
  grid-column-end: 7;
  font-size: ${Clamp(1, 1.25)};
`;
