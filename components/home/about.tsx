import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import { devices } from "../../styles/media/device";
import { PageNumber, SectionWrapper } from "../../styles/common";

const About = () => {
  return (
    <SectionWrapper>
      <PageNumber>01/</PageNumber>
      <AboutDescWrapper>
        <MyIntro>
          Passionate about modern web technologies, I work at the intersection of creative design and robust engineering. From pixel-perfect frontends to scalable backends, I
          create digital products that deliver both memorable user experiences and reliable performance.
        </MyIntro>
        <MyHobby>When I'm not building or scaling web platforms, you'll probably find me exploring new tech, flying drones, or playing games.</MyHobby>
      </AboutDescWrapper>
      <IntroText>Scalable SaaS Solutions, Engineered for Growth</IntroText>
      <IntroDescWrapper>
        <p>
          I partner with startups and enterprises to design and build SaaS platforms and business applications that combine pixel-perfect frontends with robust backend systems.
          From MVPs to enterprise-grade platforms, I ensure products are secure, scalable, and optimized for performance.
        </p>
        <p>
          With 8+ years in full stack development, I’ve delivered solutions handling real-time transactions at scale, built multi-tenant SaaS architectures, and integrated APIs,
          payment systems, and cloud services to drive measurable business results. My focus is on creating digital products that engage users, streamline workflows, and accelerate
          growth.
        </p>
      </IntroDescWrapper>
      {/* <AboutLink>More about me and services</AboutLink> */}
    </SectionWrapper>
  );
};

export default About;

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

const MyIntro = styled.p`
  text-transform: uppercase;
`;

const MyHobby = styled.p`
  padding-top: 60px;
  text-transform: uppercase;
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
