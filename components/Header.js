import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledLink = styled.a`
  text-decoration: none;
  padding: 3.125rem;
  font-size: 1.8rem;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.oliveDrab7
      : props.theme.colors.oliveDrab72};
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.colors.aeroBlue};
`;

const NavLi = styled.li`
  display: flex;
  flex-align: center;
  align-items: center;
  margin: 0;
  ${(props) => props.left && 'margin-right: auto;'};
`;

const NavItem = ({ href, children, left }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  console.log({ isActive });
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
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
        <NavItem href="/portfolio">PORTOLIO</NavItem>
        <NavItem href="/contact">CONTACT</NavItem>
      </NavUl>
    </header>
  );
};
export default Header;
