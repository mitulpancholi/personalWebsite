import styled from "styled-components"
import { devices } from "./media/device"
import Clamp from "../lib/Clamp"

export const SectionWrapper = styled.section`
  @media ${devices.tablet} {
    grid-template-columns: repeat(12, 1fr);
  }
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  padding-top: ${Clamp(4, 12)};
`

export const PageNumber = styled.div`
  @media ${devices.tablet} {
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: center;
  }
  grid-column-start: 1;
  grid-column-end: 7;
  font-size: ${Clamp(1.5, 2)};
`;