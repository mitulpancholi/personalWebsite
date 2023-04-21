import styled from "styled-components";
import { PageNumber, SectionWrapper } from "../../styles/common";
import { devices } from "../../styles/media/device";
import Clamp from "../../lib/Clamp";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("this was called ====>")
  };
  const formChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    //https://upmostly.com/tutorials/autosizing-textarea-react
  };

  return (
    <SectionWrapper>
      <PageNumber>04/</PageNumber>
      <StyledTitle>Contact</StyledTitle>
      <StyledContactIntro>
        Let&apos;s collaborate on something great
      </StyledContactIntro>
      <StyledContactDescription>
        I&apos;m always looking for new and exciting projects to work on. If you
        have a project you&apos;d like to discuss, or if you just want to say
        hello, feel free to get in touch using the contact form below.
        Let&apos;s work together to create something amazing!
      </StyledContactDescription>
      <StyledFrom onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={formChange}
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={formChange}
            name="email"
          />
        </fieldset>
        <fieldset>
          <textarea
            required
            placeholder="Message"
            rows={1}
            value={formData.message}
            onChange={formChange}
            name="message"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </StyledFrom>
    </SectionWrapper>
  );
};

export default Contact;

const StyledTitle = styled.h3`
  @media ${devices.tablet} {
    grid-column: 3/6;
  }
  grid-column: 1/7;
  font-size: ${Clamp(2, 5)};
  line-height: 100%;
  text-transform: uppercase;
  width: max-content;
`;

const StyledContactIntro = styled.p`
  @media ${devices.tablet} {
    grid-column: 3/13;
  }
  grid-column: 1/7;
  font-size: ${Clamp(2, 3)};
  margin-top: 60px;
`;

const StyledContactDescription = styled.p`
  @media ${devices.tablet} {
    grid-column: 3/11;
  }
  grid-column: 1/7;

  font-size: ${Clamp(1.2, 2)};
  font-family: var(--poppins-font);
  margin-top: 20px;
`;

const StyledFrom = styled.form`
  @media ${devices.tablet} {
    grid-column: 3/12;
  }
  grid-column: 1/7;
  margin-bottom: 200px;
  fieldset {
    @media ${devices.tablet} {
      flex-wrap: nowrap;
    }
    flex-wrap: wrap;
    border: none;
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }

  input {
    font-family: var(--poppins-font);
    border: none;
    border-bottom: 1px solid black;
    font-size: ${Clamp(1, 2)};
    padding: 10px 0;
    width: 100%;
    &:focus-visible {
      outline: 0px;
    }
  }

  textarea {
    font-family: var(--poppins-font);
    border: none;
    border-bottom: 1px solid black;
    font-size: ${Clamp(1, 2)};
    padding: 10px 0;
    width: 100%;
    resize: none;
    &:focus-visible {
      outline: 0px;
    }
  }

  button {
    border: none;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: ${Clamp(1, 1.75)};
    text-transform: uppercase;
    font-family: var(--poppins-font);
  }
`;
