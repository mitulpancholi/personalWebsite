import styled from "styled-components";
import Clamp from "../../lib/Clamp";
import RecentBlog from "../../components/blog/recentBlog";
import AllBlogs from "../../components/blog/allBlog";

const Blog = () => {
  return (
    <StyledSection>
      <StyledTitle>Inside mind of frontend developer</StyledTitle>
      {/* <RecentBlog /> */}
      <AllBlogs />
    </StyledSection>
  );
};

export default Blog;

const StyledSection = styled.section`
padding-top: 100px;
`

const StyledTitle = styled.h2`
text-align: center;
text-transform: uppercase;
font-size: ${Clamp(3,5)};
`

