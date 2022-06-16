import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <PageTitle>Mitul Pancholi</PageTitle>
      </Link>
      <nav>
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
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  min-width: 250px;
`;

const ListItems = styled.li`
  font-size: 1.25rem;
  cursor: pointer;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  cursor: pointer;
`;
