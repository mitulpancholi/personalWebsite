import styled from "styled-components";
import BlogCard from "./blogCard";
import Clamp from "../../lib/Clamp";

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
`

const StyledBlogSection = styled.div`
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-family: var(--poppins-font);
  font-size: ${Clamp(3, 5)};
`;

