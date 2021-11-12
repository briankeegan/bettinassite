import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

const Button = styled.button`
  display: flex;
  align-items: center;
  border: solid red;
  z-index: 100;
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
  /* transition: all 4000ms ease; */
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
  border: solid blue;
  text-decoration: none;
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
      <Button onClick={handleClick} className="fas fa-bars">
        {/* Icon credit to https://fontawesome.com/v5.15/icons/bars?style=solid */}
        <MenuIcon />
      </Button>

      <Menu hidden={!isActive}>
        <MenuUl>
          <MenuLi>
            <Link href="/about">About</Link>
          </MenuLi>
          <MenuLi>
            <Link href="/portfolio">Portfolio</Link>
          </MenuLi>
          <MenuLi>
            <Link href="/services">Services</Link>
          </MenuLi>
          <MenuLi>
            <Link href="/contact">Contact</Link>
          </MenuLi>
        </MenuUl>
        <Button onClick={handleClick} className="fas fa-bars">
          {/* Icon credit to https://fontawesome.com/v5.15/icons/bars?style=solid */}
          <MenuIcon />
        </Button>
      </Menu>
    </>
  );
}

export default DropDownMenu;

