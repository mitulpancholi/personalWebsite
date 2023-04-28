import Head from "next/head";
import styled from "styled-components";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";
import { useRef, useState } from "react";
import useAutosizeTextArea from "../lib/AutosizeTextArea";
import Link from "next/link";

const Contact = () => {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("this was called ====>");
  };

  const formChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.name === "message") {
      setValue(e.target.value);
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    //https://upmostly.com/tutorials/autosizing-textarea-react
  };

  return (
    <>
      <Head>
        <title>Mitul Pancholi | Contact</title>
      </Head>
      <StyledSection>
        {/*  */}
        <StyledSocialWrapper>
          <Link target="_blank" passHref href="https://github.com/mitulpancholi">
            Github
          </Link>
          <Link target="_blank" passHref href="https://www.linkedin.com/in/mitulpancholi/">
            Linkedin
          </Link>
        </StyledSocialWrapper>

        {/* Contact Form */}
        <ContactFormWrapper>
          <div>
            <h4>
              Let&apos;s turn your ideas into reality. Together, we&apos;ve got
              this!
            </h4>
            <p>Tell us more about yourself and what you&apos;ve got in mind.</p>
          </div>

          <StyledFrom method="post" onSubmit={handleSubmit}>
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
                ref={textAreaRef}
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
        </ContactFormWrapper>
      </StyledSection>
    </>
  );
};

export default Contact;

const StyledSection = styled.section`
  @media ${devices.tablet} {
    gap: 10px;
  }
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr auto;
  margin-top: 40px;
  gap: 40px;
`;

const StyledSocialWrapper = styled.aside`
  @media ${devices.tablet} {
    grid-row: 1/2;
    grid-column: 1/3;
    justify-content: flex-start;
  }
  grid-column: 1/13;
  grid-row: 2/3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;

  a {
    cursor: pointer;
    font-size: ${Clamp(0.875, 1.5)};
    text-transform: uppercase;
  }
`;

const ContactFormWrapper = styled.div`
  @media ${devices.tablet} {
    grid-column: 4/13;
    min-height: 520px;
    height: calc(100vh - 148px);
  }
  @media ${devices.laptopL} {
    grid-column: 3/13;
  }
  grid-column: 1/13;
  min-height: initial;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h4 {
    font-size: ${Clamp(2, 5)};
    text-transform: uppercase;
    line-height: 120%;
    letter-spacing: 1px;
  }

  p {
    font-size: ${Clamp(1, 3)};
    font-weight: 300;
    margin-top: 20px;
  }
`;

const StyledFrom = styled.form`
  @media ${devices.tablet} {
    grid-column: 3/12;
  }
  grid-column: 1/7;
  margin-top: 0px;
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
    overflow: hidden;
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
    cursor: pointer;
  }
`;
