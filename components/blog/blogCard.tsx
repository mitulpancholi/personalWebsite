import Image from "next/image";
import styled from "styled-components";
import Clamp from "../../lib/Clamp";

interface BlogCardProps {
  height?: string;
  direction?: string;
}

interface ImageWrapperProps {
  height?: string;
}
interface BlogArticleProps {
  direction: string;
}

const BlogCard = ({ height, direction = "column" }: BlogCardProps) => {
  return (
    <StyledArticle direction={direction}>
      <StyledImageWrapper height={height}>
        <Image src="/Images/about/about-banner.jpg" alt="sdads" fill />
      </StyledImageWrapper>
      <StyledDescriptionWrapper>
        <StyledDate>25th March 2023</StyledDate>
        <BlogTitle>
          How AI is Taking over the world : ChatGPT, lets deal with the real
          life problem with AI tool available
        </BlogTitle>
        <BlogDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolore eaque in porro impedit ipsam voluptas provident deleniti! Et voluptate quaerat obcaecati nisi ut voluptates fugit tempore atque ratione ex! Inventore error dolorum quos quam, aliquid necessitatibus recusandae quod minima.
        </BlogDescription>
        <p>AI-Machine Learning-Python</p>
      </StyledDescriptionWrapper>
    </StyledArticle>
  );
};

export default BlogCard;

const StyledDescriptionWrapper = styled.div`
`

const StyledArticle = styled.article<BlogArticleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  gap: 20px;
`;

const StyledImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  overflow: hidden;
  z-index: -1;
  display: inline-flex;
  /* margin-top: 20px; */
  width: 100%;
  height: ${(props) => (props.height ? props.height : "300px")};
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
  }
`;

const StyledDate = styled.span`
  font-size: ${Clamp(1.15, 1.25)};
  color: #535353;
  font-family: var(--poppins-font);
`;
const BlogTitle = styled.h5`
  font-size: ${Clamp(1.25, 1.75)};
  text-transform: uppercase;
`;
const BlogDescription = styled.p`
  font-family: var(--poppins-font);
  margin: 10px 0px;
`;

