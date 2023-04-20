import styled from "styled-components";
import { PageNumber, SectionWrapper } from "../../styles/common";
import { devices } from "../../styles/media/device";
import Clamp from "../../lib/Clamp";
import IndividualProject from "./individualProject";

function Project() {
  const ProjectData = [
    {
      title: "How&How Studio",
      imageUrl: "/images/project/howAndHow/banner.png",
      imageAlt: "How & How Studio",
      description:
        "How&How is a branding agency based in London, Lisbon and LA. known for innovative approach and creative solutions & specialize in creating compelling branding strategies that help businesses stand out in a crowded digital landscape",
      stack: ["Nextjs", "Stitches", "Framer-Motion", "Radix UI"],
      link: "https://how.studio/",
    },
    {
      title: "Jane Wentworth",
      imageUrl: "/images/project/janeWentworth/banner.png",
      imageAlt: "Jane Wentworth",
      description:
        "Jane Wentworth Associates is an independent strategic consultancy, based in central London and working with cultural clients all over the world. We change minds, experiences and organisations for the better.",
      stack: ["Nextjs", "Stitches", "Framer-Motion", "Radix UI"],
      link: "https://janewentworth.com/",
    },
    {
      title: "BriefCatch",
      imageUrl: "/images/project/briefCatch/banner.png",
      imageAlt: "Briefcatch",
      description:
        "BriefCatch is a first-of-its-kind advanced editing tool that offers instant feedback on any legal document.",
      stack: ["React", "Firebase", "Tailwind", "React-Query"],
      link: "https://briefcatch.com/",
    },
  ];
  return (
    <>
      <SectionWrapper>
        <PageNumber>02/</PageNumber>
        <StyledTitle>Project</StyledTitle>
        {ProjectData.map((element, index) => (
          <IndividualProject
            title={element.title}
            imageUrl={element.imageUrl}
            imageAlt={element.imageAlt}
            stack={element.stack}
            description={element.description}
            link={element.link}
            key={index}
          />
        ))}

        {/* <IndividualProject /> */}
      </SectionWrapper>
    </>
  );
}

export default Project;

const StyledTitle = styled.h3`
  @media ${devices.tablet} {
    grid-column: 3/6;
  }
  grid-column: 1/7;
  font-size: ${Clamp(2, 5)};
  line-height: 100%;
  text-transform: uppercase;
`;
