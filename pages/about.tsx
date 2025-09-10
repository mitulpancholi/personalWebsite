import Image from "next/image";
import MyImage from "../public/Images/about/IMG_9313.jpg";
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
        <title>About Mitul Pancholi | Full Stack Developer & SaaS Engineer</title>
        <meta
          name="description"
          content="Learn more about Mitul Pancholi, a Full Stack Developer with 8+ years of experience building SaaS platforms, scalable web apps, and pixel-perfect frontends using React.js, Next.js, Node.js, TypeScript, and cloud technologies."
        />
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
              I am Mitul Pancholi, a Full Stack Developer with 8+ years of experience building scalable SaaS platforms, high-performance web applications, and secure backend
              systems. My work focuses on delivering end-to-end solutions that combine pixel-perfect user interfaces with robust, cloud-ready architectures. <br /> <br /> Over the years,
              I have partnered with startups, agencies, and enterprises to design and develop products that are responsive, SEO-friendly, and optimized for growth. From real-time
              applications handling 500k+ transactions to multi-tenant SaaS dashboards with authentication, payments, and API integrations, I specialize in creating applications
              that scale seamlessly and perform reliably under heavy demand.
              <br /> <br />My expertise spans a modern tech stack, including React.js, Next.js, Node.js, TypeScript, GraphQL, Tailwind CSS, PostgreSQL, MongoDB, MySQL, Docker, AWS, and
              Firebase. Beyond technical delivery, I focus on clean code, maintainability, security best practices, and CI/CD workflows to ensure long-term success for every
              project.
              <br /><br />
              When working with me, you can expect:
              <br /><br />
              <ul>
                <li>High-performance applications built for scalability and reliability</li>
                <li>Conversion-focused, responsive frontends designed for engagement and SEO</li>
                <li>Secure APIs and cloud infrastructure for SaaS and enterprise platforms</li>
                <li>Clear communication, structured workflows, and on-time delivery</li>
              </ul>
              <br />
              I am committed to helping businesses transform ideas into products, optimize workflows, and accelerate digital growth through modern full stack development.
            </StyledDescription>

            <StyledTestimonial>
              <Testimonial imgAlt="Optimized Consulting" imgSrc={"/Images/about/optimizedConsulting.jpeg"} review={OptimizedConsultingReview} companyName="Optimized Consulting" />
              <Testimonial imgAlt="Studio 206" imgSrc={"/Images/about/studio206.jpeg"} review={Studio206Review} companyName="Studio 206" />
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
    grid-column: 6/13;
  }
  margin-top: 80px;
  grid-column: 1/13;
`;

const StyledDescription = styled.article`
  @media ${devices.tablet} {
    grid-column: 1/13;
  }
  grid-column: 1/13;
  font-weight: 300;

  ul {
    list-style: disc;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
  }
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
