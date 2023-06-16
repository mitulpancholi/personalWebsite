import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import BlogCard from "./blogCard";
import { devices } from "../../styles/media/device";

const RecentBlog = () => {
  return (
    <StyledSection>
      <StyledTitle>Recent Blog</StyledTitle>
      <BlogListing>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </BlogListing>
    </StyledSection>
  );
};

export default RecentBlog;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-family: var(--poppins-font);
  font-size: ${Clamp(3, 5)};
`;

const StyledSection = styled.section`
  margin-top: 40px;
`;

const BlogListing = styled.div`
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
