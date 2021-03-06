import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Clamp from "../lib/Clamp";
import { devices } from "../styles/media/device";

interface MobileMenuProps {
  openMenu: boolean;
}

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
      // used to avoid scroll during mobile menu
      document.body.style.touchAction = "none";
      // touch-action: none;
      // -ms-touch-action: none;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      // document.body.style.position = "initial";
    }
  }, [menuActive]);
  return (
    <>
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
          <MobileMenuTitle onClick={() => setMenuActive(!menuActive)}>
            {menuActive ? "Close" : "Menu"}
          </MobileMenuTitle>
        </StyledNav>
      </HeaderWrapper>
      <MobileMenu openMenu={menuActive}>
        <MobileMenuListWrapper>
          <MobileMenuUl>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </MobileMenuUl>
        </MobileMenuListWrapper>
        <StyledLocationWrapper>
          <p>
            Based in Surat <br /> gujarat,INDIA
          </p>
        </StyledLocationWrapper>
      </MobileMenu>
    </>
  );
};

export default Header;

const MobileMenu = styled.div<MobileMenuProps>`
  @media ${devices.tablet} {
    display: none;
  }
  min-height: 464px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #04293a;
  z-index: 4;
  clip-path: ${(props) =>
    props.openMenu ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)"};
  overflow: hidden;
   /* height: -webkit-fill-available; */
  -webkit-overflow-scrolling: touch;
  transition: ease 0.5s all;
  padding: 20px 20px;
`;

const MobileMenuListWrapper = styled.div`
  /* margin-top: 200px; */
`;

const MobileMenuUl = styled.ul`
  list-style-type: none;
  li {
    text-transform: uppercase;
    font-size: 48px;
  }
`;

const StyledLocationWrapper = styled.div`
  margin-top: 40px;
  p {
    line-height: 120%;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const HeaderWrapper = styled.header`
  z-index: 5;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  mix-blend-mode: difference;
  color: #ecb365;
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
`;
