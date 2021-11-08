import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';

const StyledLink = styled.a`
  text-decoration: none;
  padding: 2.4rem;
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
  console.log({ isActive });
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </NavLi>
  );
};

const X = 3;
function MenuVector() {
  return (
    <Image
      src="/pics/menu_vector.svg"
      alt="instagram icon"
      width={85 / X}
      height={85 / X}
    />
  );
}

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
        {/* Icon credit to https://fontawesome.com/v5.15/icons/bars?style=solid */}
        <NavItem href="/menu">
          <i className="fas fa-bars">
            <MenuVector />
          </i>
        </NavItem>
      </NavUl>
    </header>
  );
};
export default Header;
