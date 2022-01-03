import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import DropdownMenu from './DropdownMenu';
import { useIsTabletOrMobile } from '../hooks';
import Image from 'next/image';

const StyledLink = styled.a`
  text-decoration: none;
  padding: 2.5rem;
  font-size: 1.6rem;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.oliveDrab72
      : props.theme.colors.nickel};

  @media (max-width: 1438px) {
    border: 2px blue solid;
    display: flex;
    align-items: center;
    /* margin-right: 7rem; force it to the left, would rather not tho*/
    padding: 0;
  }
`;

const MenuStyled = styled.li`
  border: 2px green solid;
  padding: 0;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  margin-left: 3rem;
  margin-right: 3rem;

  @media (max-width: 1438px) {
    border: 2px red solid;
    padding: 0;
    margin: 0;
    /* why is red border padding sinking below foto? */
  }
`;

const NavLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 6rem;
  ${(props) => props.left && 'margin-right: auto;'};
`;

const X = 5;
function InstagramIcon() {
  return (
    <Image
      src="/pics/instagram-brands.svg"
      alt="instagram icon"
      width={200 / X}
      height={200 / X}
    />
  );
}

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
  const isTabletOrMobile = useIsTabletOrMobile();
  const { navBar = {} } = copy;
  return (
    <header>
      <NavUl>
        {!isTabletOrMobile && (
          <NavItem href="/" left>
            {navBar.home}
          </NavItem>
        )}

        {!isTabletOrMobile && (
          <>
            <NavItem href="/about">{navBar.about}</NavItem>
            <NavItem href="/portfolio">{navBar.portfolio}</NavItem>
            <NavItem href="/services">{navBar.services}</NavItem>
            <NavItem href="/contact">{navBar.contact}</NavItem>
            <NavItem
              href="https://www.instagram.com/begoniabaschy/"
              rel="noreferrer"
              target="_blank"
            >
              {/* credit to https://fontawesome.com/v5.15/icons/instagram?style=brands */}
              <i className="fab fa-instagram">
                <InstagramIcon />
              </i>
            </NavItem>
          </>
        )}

        {/* Mobile */}
        {isTabletOrMobile && (
          <>
            <NavItem href="/" left>
              {navBar.mobileHome}
            </NavItem>
            <MenuStyled>{isTabletOrMobile && <DropdownMenu />}</MenuStyled>
          </>
        )}
      </NavUl>
    </header>
  );
};
export default Header;
