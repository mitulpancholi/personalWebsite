import Link from "next/link";
import styled from "styled-components";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";
const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <PageTitle>Mitul Pancholi</PageTitle>
      </Link>
      <StyledNav>
        <UnorderList>
          <Link href="#about">
            <ListItems>About</ListItems>
          </Link>
          <Link href="#work">
            <ListItems>Work</ListItems>
          </Link>
          <Link href="#contact">
            <ListItems>Contact</ListItems>
          </Link>
        </UnorderList>
        <MobileMenuTitle>Menu</MobileMenuTitle>
      </StyledNav>
      <MobileMenu></MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;

const MobileMenu = styled.div`
  position: absolute;
  inset: 0;
  background: #3c4a3c;
  z-index: 1;
  display: none;
`;

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  mix-blend-mode: difference;
  color: #e5e5e5;
`;

const UnorderList = styled.ul`
  @media ${devices.tablet} {
    list-style: none;
    display: flex;
    justify-content: space-between;
    min-width: 300px;
  }
  display: none;
`;

const ListItems = styled.li`
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
`;

const PageTitle = styled.h1`
  font-size: ${Clamp(1.25, 1.5)};
  cursor: pointer;
  text-transform: uppercase;
  z-index: 3;
`;

const MobileMenuTitle = styled.span`
  @media ${devices.tablet} {
    display: none;
  }
  display: block;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

const StyledNav = styled.nav`
  z-index: 3;
  
`
