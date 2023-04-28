import Image from "next/image";
import MyImage from "../public/Images/about/about-banner.jpg";
import styled from "styled-components";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";
import Head from "next/head";
import Testimonial from "../components/about/testimonial";

const About = () => {
  const OptimizedConsultingReview =
    "Mitul did fantastic work for our project. He is an extremely talented developer, and we were fortunate to have him on the team. We hope to work with you again someday!";
  const Studio206Review =
    "It was a great experience working with Mitul, very easy to communicate with. His skills definitely define him as a great developer. He is really talented and has delivered better than one can expect. I will work with him in the future. Thank you for everything. Cheers!";
  return (
    <>
      <Head>
        <title>Mitul Pancholi | About</title>
      </Head>
      <StyledSection>
        <StyledTitle>
          I really <br />
          love to
          <br />
          talk with <br />
          people
        </StyledTitle>

        <StyledSecondRow>
          <StyledImageWrapper>
            <Image src={MyImage} alt="Mitul Pancholi" fill priority />
          </StyledImageWrapper>
          <StyledDescWrapper>
            <StyledDescription>
              Well, well, well, look who stumbled upon my corner of the
              internet! <br />
              <br />
              As a web developer with 6+ years of experience, I&apos;ve spent
              more time in front of a computer than I have with actual humans.
              But hey, that&apos;s the price you pay for being a coding genius,
              right? <br />
              <br />
              Speaking of genius, I&apos;ve been known to build websites that
              are so beautiful, it&apos;s like staring into the sun (but without
              the risk of permanent eye damage). And I&apos;m not just talking
              about your run-of-the-mill, boring websites - I&apos;m talking
              about sites that make you want to break out into a spontaneous
              dance party. <br />
              <br />
              But let&apos;s be real here, web development isn&apos;t all
              sunshine and rainbows. I&apos;ve spent countless nights hunched
              over my keyboard, chugging coffee like it&apos;s my life force,
              and muttering obscenities under my breath. It&apos;s not pretty,
              but it&apos;s necessary to make sure your website is functioning
              at its peak. <br />
              <br />
              And don&apos;t even get me started on clients. I&apos;ve had to
              deal with people who think that adding a blinking rainbow
              background to their website is a good idea (spoiler alert:
              it&apos;s not). But hey, it&apos;s all part of the job, and
              I&apos;m always up for a challenge.
            </StyledDescription>
            <StyledTestimonial>
              <Testimonial
                imgAlt="Optimized Consulting"
                imgSrc={"/Images/about/optimizedConsulting.jpeg"}
                review={OptimizedConsultingReview}
                companyName="Optimized Consulting"
              />
              <Testimonial
                imgAlt="Studio 206"
                imgSrc={"/Images/about/studio206.jpeg"}
                review={Studio206Review}
                companyName="Studio 206"
              />
            </StyledTestimonial>
          </StyledDescWrapper>
        </StyledSecondRow>
      </StyledSection>
    </>
  );
};

export default About;

const StyledDescWrapper = styled.div`
  @media ${devices.tablet} {
    margin-top: 60px;
  }
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 40px;
  grid-column: 1/13;
  font-size: ${Clamp(1, 1.5)};
  line-height: 120%;
  font-family: var(--poppins-font);
  margin-bottom: 60px;
`;

const StyledTestimonial = styled.aside`
  @media ${devices.tablet} {
    grid-column: 8/13;
  }
  margin-top: 50px;
  grid-column: 1/13;
`;

const StyledDescription = styled.article`
  @media ${devices.tablet} {
    grid-column: 1/7;
  }
  grid-column: 1/13;
  font-weight: 300;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;
  gap: 10px;
`;

const StyledSecondRow = styled.div`
  @media ${devices.tablet} {
    grid-column: 4/12;
  }
  grid-row: 2/3;
  grid-column: 1/13;
  /* position: relative;
  top: -50%; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const StyledTitle = styled.h2`
  @media ${devices.tablet} {
    position: relative;
    top: 50%;
    grid-column: 2/12;
    margin-top: 0px;
  }
  font-size: ${Clamp(2, 8)};
  grid-column: 1/12;
  line-height: 100%;
  text-transform: uppercase;
  color: white;
  mix-blend-mode: difference;
  margin-top: 60px;
`;

const StyledImageWrapper = styled.div`
  grid-column: 1/13;
  position: relative;
  overflow: hidden;
  z-index: -1;
  display: inline-flex;
  /* margin-top: 20px; */
  width: 100%;
  height: auto;
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
  }
`;
