import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledLink = styled.a`
  text-decoration: none;
  padding: 3.125rem;
  font-size: 1.8rem;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.oliveDrab72
      : props.theme.colors.nickel};
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* height: 4rem; */
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  /* background: linear-gradient(#1768ac, white); */
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
          Begonia Baschy Landscaping
        </NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavUl>
    </header>
  );
};
export default Header;
