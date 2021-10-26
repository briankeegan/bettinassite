import styled from 'styled-components';
import Image from 'next/image';

// const IconContainer = styled.div`
//   margin-top: 1em;

//   /* &:hover {
//     color: grey;
//     transition: 200ms ease-in;
//   } */
// `;

const Box = styled.div`
  padding: 30px 30px;
  background: #caf7e2ff;
  position: absolute;
  bottom: 0;
  /* left: 0;
  bottom: 0;
  right: 0; */
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  background: #caf7e2ff;
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const FooterLi = styled.li`
  margin-left: 2em;
`;

const FooterLink = styled.i`
  margin-bottom: 20px;
  font-size: 18px;
  /* background: blueviolet; */

  /* &:hover {
    // check hover
    color: #fff;
    transition: 200ms ease-in;
  } */
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
      <Container>
        <FooterUl>
          <FooterLi>
            <FooterLink>
              <a
                href="https://www.instagram.com/begoniabaschy/"
                rel="noreferrer"
                target="_blank"
              >
                {/* credit to https://fontawesome.com/v5.15/icons/instagram?style=brands */}
                <i className="fab fa-instagram">
                  <InstaIcon />
                </i>
              </a>
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <p>Bettinasemail@emailstuff.com</p>
          </FooterLi>
        </FooterUl>
      </Container>
    </Box>
  );
};

export default Footer;
