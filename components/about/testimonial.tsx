import Image from "next/image";
import styled from "styled-components";
import Clamp from "../../lib/Clamp";

interface TestimonialProps {
  imgSrc: string;
  review: string;
  companyName: string;
  imgAlt: string;
}

const Testimonial = ({
  imgAlt,
  imgSrc,
  review,
  companyName,
}: TestimonialProps) => {
  return (
    <>
      <Typography>&quot;{review}&quot;</Typography>
      <hr />
      <TestimonialWrapper>
        <TestimonialBy>
          <span>Testimonial By</span>
          <span>- {companyName}</span>
        </TestimonialBy>
        <div>
          <Image src={imgSrc} alt={imgAlt} width={50} height={50} />
        </div>
      </TestimonialWrapper>
    </>
  );
};

export default Testimonial;

const Typography = styled.p`
  margin-bottom: 10px;
  font-style: italic;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: ${Clamp(0.75, 1)};
  align-items: center;
  margin-bottom: 60px;
`;

const TestimonialBy = styled.div`
  display: flex;
  flex-direction: column;
`;
