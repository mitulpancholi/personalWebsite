import styled, { keyframes } from "styled-components";
import Clamp from "../../lib/Clamp";

const Intro = () => {
  return (
    <HomeSection>
      <StyledHeading>
        <ParentSpan>
          <DisplaySpan>Creative</DisplaySpan>
          <IndividualSpan aria-hidden="true">c</IndividualSpan>
          <IndividualSpan aria-hidden="true">r</IndividualSpan>
          <CIndividualspan aria-hidden="true">e</CIndividualspan>
          <IndividualSpan aria-hidden="true">a</IndividualSpan>
          <IndividualSpan aria-hidden="true">t</IndividualSpan>
          <IndividualSpan aria-hidden="true">i</IndividualSpan>
          <IndividualSpan aria-hidden="true">v</IndividualSpan>
          <IndividualSpan aria-hidden="true">e</IndividualSpan>
        </ParentSpan>
        <br />
        <ParentSpan>
          <DisplaySpan>Developer</DisplaySpan>
          <IndividualSpan aria-hidden="true">D</IndividualSpan>
          <IndividualSpan aria-hidden="true">e</IndividualSpan>
          <IndividualSpan aria-hidden="true">v</IndividualSpan>
          <IndividualSpan aria-hidden="true">e</IndividualSpan>
          <IndividualSpan aria-hidden="true">l</IndividualSpan>
          <IndividualSpan aria-hidden="true">o</IndividualSpan>
          <IndividualSpan aria-hidden="true">p</IndividualSpan>
          <IndividualSpan aria-hidden="true">e</IndividualSpan>
          <IndividualSpan aria-hidden="true">r</IndividualSpan>
        </ParentSpan>
      </StyledHeading>
    </HomeSection>
  );
};

export default Intro;


const ParentSpan = styled.span`
  position: relative;
  z-index: 2;
  font-size: ${Clamp(2, 19.1)};
  line-height: 80%;
`;

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

const DisplaySpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const IndividualSpan = styled.span`
  font-size: ${Clamp(2, 19.1)};
  line-height: 80%;
  text-transform: uppercase;
`;

const CIndividualspan = styled(IndividualSpan)`
    clip-path: polygon(0% 0%, 0% 100%, 47% 100%, 24% 95%, 87% 16%, 36% 96%, 20% 77%, 6% 100%, 100% 100%, 100% 0%);

`;

const HomeSection = styled.section`
  height: calc(100vh - 62px);
  min-height: 538px;
  display: flex;
  align-items: flex-end;
`;
