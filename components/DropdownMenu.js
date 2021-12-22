import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const CloseContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 3rem;
`;

const CloseButton = ({ onClick }) => (
  <CloseContainer>
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} css={{ fontSize: '2rem' }} />
    </Button>
  </CloseContainer>
);
const OpenContainer = styled.div`
  z-index: ${(props) => (props.hidden ? -1 : 1)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: all 500ms ease 350ms;
  font-size: 2rem;
`;
const OpenButton = ({ onClick, hidden }) => (
  <OpenContainer hidden={hidden}>
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faBars} css={{ fontSize: '1.8rem' }} />
    </Button>
  </OpenContainer>
);

const styledA = styled.a`
  text-decoration: none;
`;

const LinkWithOnClick = forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Link href={href} passHref>
      <styledA href={href} onClick={onClick} ref={ref}>
        {children}
      </styledA>
    </Link>
  );
});

const Button = styled.button`
  display: flex;
  align-items: center;
  z-index: 100;
  :hover {
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.hidden ? -1 : 100)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: all 500ms ease 350ms;
`;

const MenuUl = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

const MenuLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem;
  text-decoration: none;
  font-size: 30px;
`;

const X = 3;
function MenuIcon() {
  return (
    <Image
      src="/pics/menu_vector.svg"
      alt="instagram icon"
      width={60 / X}
      height={83 / X}
    />
  );
}

function DropDownMenu() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive); //update or "set" aka (setIsActive)... click event from false to true (isActive)
  return (
    <>
      <OpenButton onClick={handleClick} hidden={isActive} />
      <Menu hidden={!isActive}>
        <MenuUl>
          <MenuLi>
            <LinkWithOnClick onClick={handleClick} href="/about">
              About
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick onClick={handleClick} href="/portfolio">
              Portfolio
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick onClick={handleClick} href="/services">
              Services
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick onClick={handleClick} href="/contact">
              Contact
            </LinkWithOnClick>
          </MenuLi>
        </MenuUl>
        <CloseButton onClick={handleClick} />
      </Menu>
    </>
  );
}

export default DropDownMenu;
