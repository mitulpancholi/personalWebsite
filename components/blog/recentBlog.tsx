import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import BlogCard from "./blogCard";

const RecentBlog = () => {
  return (
    <StyledSection>
      <StyledTitle>Recent Blog</StyledTitle>
      <BlogListing>
        <BlogCard height="80%" />
        <BlogCard  />
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
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;

  article {
    &:first-child {
      grid-column: 1/2;
      grid-row: 1/4;
    }
  }
`;
