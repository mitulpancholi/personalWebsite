import styled from "styled-components";
import { PageNumber, SectionWrapper } from "../../styles/common";
import { devices } from "../../styles/media/device";
import Clamp from "../../lib/Clamp";

const MyStack = () => {
  const StackData = [
    {
      title: "Headless CMS",
      value: ["Sanity", "Contentful"],
    },
    {
      title: "Frameworks",
      value: ["Next.js", "Gatsby"],
    },
    {
      title: "Languages & Libraries",
      value: ["React", "TypeScript", "JavaScript"],
    },
    {
      title: "Deployment Platforms",
      value: ["Vercel", "Netlify"],
    },
    {
      title: "Collaboration",
      value: ["Slack", "Jira", "Asuna"],
    },
    {
      title: "Version Control",
      value: ["Github", "BitBucket"],
    },
  ];
  return (
    <SectionWrapper>
      <PageNumber>03/</PageNumber>
      <StyledTitle>Skills</StyledTitle>
      {StackData.map((el, index) => (
        <StyledGroupWrapper key={index}>
          <StyledSkillTitle>{el.title}</StyledSkillTitle>
          <StyledSkillWrapper>
            {el.value.map((element, index) => (
              <StyledSkill key={index}>{element}</StyledSkill>
            ))}
          </StyledSkillWrapper>
        </StyledGroupWrapper>
      ))}
    </SectionWrapper>
  );
};

export default MyStack;

const StyledTitle = styled.h3`
  @media ${devices.tablet} {
    grid-column: 3/6;
  }
  margin-bottom: 40px;
  grid-column: 1/7;
  font-size: ${Clamp(2, 5)};
  line-height: 100%;
  text-transform: uppercase;
  width: max-content;
`;

const StyledGroupWrapper = styled.div`
  @media ${devices.tablet} {
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
  }
  display: grid;
  gap: 20px;
  grid-column: 1/7;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #b0b0b0;
  padding: 30px 0;
`;

const StyledSkillTitle = styled.p`
  @media ${devices.tablet} {
    grid-column: 2/6;
  }
  grid-column: 1/7;
  font-size: ${Clamp(1.5, 2.5)};
  color: #303030;
`;
const StyledSkill = styled.span`
  display: flex;
  align-items: center;
  font-size: ${Clamp(1, 2)};
  font-weight: 400;
  font-family: var(--poppins-font);
`;

const StyledSkillWrapper = styled.div`
  @media ${devices.tablet} {
    grid-column: 6/12;
    gap: 0;
  }
  grid-column: 1/7;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;
