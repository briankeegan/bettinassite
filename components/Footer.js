import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { useIsTabletOrMobile } from '../hooks';

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
  background-color: #ffffff;
  @media (max-width: 1438px) {
    position: relative;
    margin-top: 2rem;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const FooterLi = styled.li`
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${(props) => props?.theme?.colors?.oliveDrab72};

  @media (max-width: 1438px) {
    margin: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

const StyledGram = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const InstagramButton = () => (
  <StyledGram
    href="https://www.instagram.com/begoniabaschy/"
    rel="noreferrer"
    target="_blank"
  >
    <FaInstagram css={{ fontSize: '2rem' }} />
  </StyledGram>
);

const Footer = ({ copy }) => {
  const { footer = [] } = copy;
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <FooterUl>
        {!isTabletOrMobile && <InstagramButton />}
        {footer.map((item) => {
          return <FooterLi key={item}>{item}</FooterLi>;
        })}
        {isTabletOrMobile && <InstagramButton />}
      </FooterUl>
    </Container>
  );
};

export default Footer;
