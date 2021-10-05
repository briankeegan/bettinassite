import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  padding: 3.125rem;
  font-size: 1.8rem;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
  margin-left: 12rem;
  margin-right: 12rem;
  padding: 0;
  background-color: ${(props) => props.theme.colors.aeroBlue};
`;

const NavLi = styled.li`
  display: flex;
  flex-align: center;
  align-items: center;
  margin: 0;
  ${(props) => props.left && 'margin-right: auto;'}
`;

const NavItem = ({ href, children, left }) => {
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    </NavLi>
  );
};

const Header = () => {
  return (
    <header>
      <NavUl>
        <NavItem href="/" left>
          LOGO
        </NavItem>
        <NavItem href="/about">ABOUT</NavItem>
        <NavItem href="/contact">CONTACT</NavItem>
        <NavItem href="/portfolio">PORTOLIO</NavItem>
      </NavUl>
    </header>
  );
};
export default Header;
