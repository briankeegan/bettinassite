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
  /* border: solid red; */
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.hidden ? -1 : 100)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  /* box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3); */
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

// <Media
// queries={{
//   small: '(max-width: 599px)',
//   medium: '(min-width: 600px) and (max-width: 1199px)',
//   large: '(min-width: 1200px)',
// }}
// >
// {(matches) => (
//   <Fragment>
//     {matches.small && <p>I am small!</p>}
//     {matches.medium && <p>I am medium!</p>}
//     {matches.large && <p>I am large!</p>}
//   </Fragment>
// )}
