import styled, { keyframes } from "styled-components";
import Clamp from "../../lib/Clamp";

const Intro = () => {
  return (
    <HomeSection>
      <StyledHeading>
        <StyledIntroQuote>
          Welcome to the realm of innovative design and seamless user
          experiences - where every pixel tells a story, and each line of code
          transforms visions into reality.
        </StyledIntroQuote>
      </StyledHeading>
    </HomeSection>
  );
};

export default Intro;

const StyledHeading = styled.h1`
  display: block;
  //   before after to adjust the overflowing issue with font size having large height
  ::before,
  ::after {
    content: "";
    display: block;
    height: 0;
    width: 0;
  }
  ::before {
    margin-top: 0px;
  }
  ::after {
    margin-bottom: 54px;
  }
`;
const StyledIntroQuote = styled.span`
  font-size: ${Clamp(1, 4.5)};
  font-family: var(--poppins-font);
  font-weight: 500;
  line-height: 120%;
`

const HomeSection = styled.section`
  height: calc(100vh - 62px);
  min-height: 538px;
  display: flex;
  align-items: flex-end;
`;
