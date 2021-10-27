import styled from 'styled-components';
import Image from 'next/image';

const Box = styled.div`
  /* background: #f5d6ba; */
  background: #ffffff;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  width: 100%; //footer box is a little big and squeezes photos in a bit too much
  height: 4rem;
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   max-width: 1000px;
//   margin: 0 auto;
//   background: #caf7e2ff;
// `;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0;
`;

const FooterLi = styled.li`
  margin-left: 2em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.oliveDrab72};
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
  /* &:hover {
    background-color: #f0fff0;
  } */
`;

const X = 5;
function InstaIcon() {
  return (
    <Image
      src="/pics/instagram-brands.svg"
      alt="instagram icon"
      width={200 / X}
      height={200 / X}
    />
  );
}

const Footer = () => {
  return (
    <Box>
      <FooterUl>
        <FooterLi>
          <FooterLink
            href="https://www.instagram.com/begoniabaschy/"
            rel="noreferrer"
            target="_blank"
          >
            {/* credit to https://fontawesome.com/v5.15/icons/instagram?style=brands */}
            <i className="fab fa-instagram">
              <InstaIcon />
            </i>
          </FooterLink>
        </FooterLi>
        <FooterLi>Bettinasemail@emailstuff.com</FooterLi>
      </FooterUl>
    </Box>
  );
};

export default Footer;
