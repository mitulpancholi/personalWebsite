import Head from "next/head";
import { styled } from "styled-components";
import Clamp from "../../lib/Clamp";

export type BlogDetailsProps = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  author: string;
  mainImage: string;
  altText: string;
  categories: string[];
  shortDescription: string;
  body: string;
};

const BlogDetails = ({ title, metaTitle, metaDescription, slug, author, mainImage, altText, categories, shortDescription, body }: BlogDetailsProps) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.mitulpancholi.com/blog/${slug}`} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={mainImage} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://www.mitulpancholi.com/blog/${slug}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={mainImage} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
      </Head>
      <main>
        <StyledSection>
          <StyledCategoryList>
            {categories.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </StyledCategoryList>
          <StyledTitle>{title}</StyledTitle>
          <StyledShortDescription>{shortDescription}</StyledShortDescription>
        </StyledSection>
      </main>
    </>
  );
};

export default BlogDetails;

const StyledSection = styled.section`
  padding-top: 100px;
  text-align: center;
  max-width: 1440px;
  margin: auto;
`;

const StyledCategoryList = styled.p`
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: ${Clamp(1, 1.25)};
  flex-wrap: wrap;
`;

const StyledTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${Clamp(3, 5)};
`;

const StyledShortDescription = styled.p`
  font-family: var(--poppins-font);
`;
