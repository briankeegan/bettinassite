import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import DropDownMenu from '../pages/dropdown_menu';

const StyledLink = styled.a`
  margin-left: 3rem;
  text-decoration: none;
  padding: 2.5rem;
  font-size: 1.6rem;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.oliveDrab72
      : props.theme.colors.nickel};
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
`;

const NavLi = styled.li`
  display: flex;
  flex-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  ${(props) => props.left && 'margin-right: auto;'};
`;

const NavItem = ({ href, children, left }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </NavLi>
  );
};

const Header = ({ copy }) => {
  const { navBar = {} } = copy;
  return (
    <header>
      <NavUl>
        <NavItem href="/" left>
          {navBar.home}
        </NavItem>
        <NavItem href="/about">{navBar.about}</NavItem>
        <NavItem href="/portfolio">{navBar.portfolio}</NavItem>
        <NavItem href="/services">{navBar.services}</NavItem>
        <NavItem href="/contact">{navBar.contact}</NavItem>
        <DropDownMenu />
      </NavUl>
    </header>
  );
};
export default Header;
