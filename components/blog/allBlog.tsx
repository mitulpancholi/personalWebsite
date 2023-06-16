import styled from "styled-components";
import BlogCard from "./blogCard";
import Clamp from "../../lib/Clamp";
import { devices } from "../../styles/media/device";

const AllBlogs = () => {
  return (
    <StyledSection>
      <StyledTitle>All Blogs</StyledTitle>
      <StyledBlogSection>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </StyledBlogSection>
    </StyledSection>
  );
};

export default AllBlogs;

const StyledSection = styled.section`
  padding-top: 100px;
`;

const StyledBlogSection = styled.div`
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(1, 1fr);
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-family: var(--poppins-font);
  font-size: ${Clamp(3, 5)};
`;
