import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  /* background: linear-gradient(white 0%, white 15%, #a1bfcd 100%); */
  /* background-image: linear-gradient(
135deg,#99b6c6 14%,#bcd8e5 78%); */
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const FooterLi = styled.li`
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.oliveDrab72};
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
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

const Footer = ({ copy }) => {
  const { footer = [] } = copy;
  return (
    <Container>
      <FooterUl>
        <FooterLi>
          <FooterLink
            href="https://www.instagram.com/begoniabaschy/"
            rel="noreferrer"
            target="_blank"
          >
            {/* credit to https://fontawesome.com/v5.15/icons/instagram?style=brands */}
            <i className="fab fa-instagram">
              <InstagramIcon />
            </i>
          </FooterLink>
        </FooterLi>
        {footer.map((item) => {
          return <FooterLi key={item}>{item}</FooterLi>;
        })}
        {/* make a do between each item -- what does this mean?*/}
      </FooterUl>
    </Container>
  );
};

export default Footer;
