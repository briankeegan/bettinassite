import styled from 'styled-components';
import Image from 'next/image';
import BettinaAboutImg from '/public/pics/bettina_new_about_foto.jpeg';
import { useIsTabletOrMobile } from '../hooks';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1438px) {
    /* position: absolute; */
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
  }
`;

function Bettina() {
  return (
    <Image
      alt="the landscape artist standing next to a very large green plant"
      src={BettinaAboutImg}
      width={5000}
      height={5900}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
      priority
    />
  );
}

const ImageContainer = styled.div`
  margin-left: 5.5rem;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  box-shadow: -0em 0 0.4em #f3f3f1, -0em 0 0.4em #f3f3f1;
  background: linear-gradient(to left top, #fff, #e7ede4 40%, #fff);
  margin: 7.5rem;
  margin-right: 5.5rem;
  margin-left: 20px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  line-height: 37px;
`;
const HeaderContainer = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  @media (max-width: 1438px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const About = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { about = {} } = copy;
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <ImageContainer>
            <Bettina />
          </ImageContainer>
          <TextContainer>
            <HeaderContainer>{about.title}</HeaderContainer>
            <p>{about.blurb}</p>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeaderContainer>{about.title}</HeaderContainer>
          <Bettina />
          <p>{about.blurb}</p>
        </>
      )}
    </Container>
  );
};
export default About;
