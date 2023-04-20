import styled from "styled-components";
import { PageNumber, SectionWrapper } from "../../styles/common";
import { devices } from "../../styles/media/device";
import Clamp from "../../lib/Clamp";

const Contact = () => {
  return (
    <SectionWrapper>
      <PageNumber>04/</PageNumber>
      <StyledTitle>Contact</StyledTitle>
      <p>Let&apos;s collaborate on something great</p>
      <p>
        I&apos;m always looking for new and exciting projects to work on. If you have
        a project you&apos;d like to discuss, or if you just want to say hello, feel
        free to get in touch using the contact form below. Let&apos;s work together
        to create something amazing!
      </p>
    </SectionWrapper>
  );
};

export default Contact;

const StyledTitle = styled.h3`
  @media ${devices.tablet} {
    grid-column: 3/6;
  }
  grid-column: 1/7;
  font-size: ${Clamp(2, 5)};
  line-height: 100%;
  text-transform: uppercase;
  width: max-content;
`;
