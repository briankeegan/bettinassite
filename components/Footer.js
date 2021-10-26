import styled from 'styled-components';
import Image from 'next/image';

const Box = styled.div`
  background: #caf7e2ff;
  position: fixed;
  bottom: 0;
  width: 100%; //footer box is a little big and squeezes photos in a bit too much
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
`;

const FooterLi = styled.li`
  margin-left: 2em;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
  &:hover {
    background-color: #f0fff0;
  }
`;

const X = 3;
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
        <FooterLi>
          <p>Bettinasemail@emailstuff.com</p>
        </FooterLi>
      </FooterUl>
    </Box>
  );
};

export default Footer;
