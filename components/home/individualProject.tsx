import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import Image from "next/image";
import Link from "next/link";
import { devices } from "../../styles/media/device";

interface IndividualProjectProps {
  title: string;
  imageUrl: any;
  imageAlt: string;
  description: string;
  stack: string[];
  link: string;
}

const IndividualProject = ({
  title,
  imageAlt,
  imageUrl,
  description,
  stack,
  link,
}: IndividualProjectProps) => {
  return (
    <ProjectWrapper>
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <StyledProjectTitle>{title}</StyledProjectTitle>
      </Link>
      <StyledImageWrapper>
        <Image src={imageUrl} alt={imageAlt} fill />
      </StyledImageWrapper>
      <StyledUnorderList>
        {stack.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </StyledUnorderList>
      <StyledArticle>{description}</StyledArticle>
    </ProjectWrapper>
  );
};

export default IndividualProject;

const ProjectWrapper = styled.div`
  @media ${devices.tablet} {
    grid-column: 3/12;
    padding: 100px 0px;
  }
  padding: 40px 0px;
  grid-column: 1/7;

  a {
    text-decoration: none;
  }
`;

const StyledProjectTitle = styled.h5`
@media ${devices.tablet} {
  line-height: 100%;

}
  text-align: end;
  font-size: ${Clamp(2, 3)};
  line-height: 140%;
  margin-top: 50px;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledUnorderList = styled.ul`
  display: flex;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: ${Clamp(1, 2)};
`;

const StyledImageWrapper = styled.div`
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

const StyledArticle = styled.article`
  @media ${devices.tablet} {
    margin-top: 80px;
  }
  margin-top: 40px;
  font-size: ${Clamp(1, 1.75)};
  font-family: var(--poppins-font);
  letter-spacing: 1px;
`;
