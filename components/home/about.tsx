import styled from "styled-components";
import Clamp from "../../lib/Clamp";

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
          PROBABLY PLAYING GAMES OR WATCHING FOOTBALL.
        </MyHobby>
      </AboutDescWrapper>
        <IntroText>A blend of UI and Product Engineering</IntroText>
      <IntroDescWrapper>
        <p>
          With a background in design, I work closely with design focused teams
          to build websites and microsites for companies and individuals. I have
          years of experience working and collaborating on product teams and
          leading engineering efforts.
        </p>
        <p>
          With my experience in UI and product engineering, I solve product
          problems and build appealing usable web experiences.
        </p>
      </IntroDescWrapper>
      <AboutLink>More about me and services</AboutLink>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: ${Clamp(4, 12)};
`;

const PageNumber = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: center;
  font-size: ${Clamp(1.5, 2)};
`;

const AboutDescWrapper = styled.article`
  grid-column-start: 4;
  grid-column-end: 11;
  font-size: ${Clamp(1, 2)};
  margin-bottom: 100px;
`;

const MyIntro = styled.p``;

const MyHobby = styled.p`
  padding-top: 60px;
`;

const IntroText = styled.span`
  font-size: ${Clamp(0.875,1.5)};
  grid-column-start: 4;
  grid-column-end: 6;
  font-weight: 500;
`

const IntroDescWrapper = styled.div`
  grid-column-start: 7;
  grid-column-end: 11;
  p {
    font-size: ${Clamp(0.75,1.25)};
    margin-bottom: 30px;
  font-weight: 500;

  }
`

const AboutLink = styled.p`
  grid-column-start: 7;
  grid-column-end: 11;
  font-size: ${Clamp(0.75,1.25)};
`
