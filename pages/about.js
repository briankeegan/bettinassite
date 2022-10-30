import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../hooks';
import AboutImage from '/public/pics/bettina_new_about_foto.jpeg';

const AboutTitle = `Bettina Chanel`;

const AboutBlurb = `
Hello! I’m Bettina, a garden designer in Olympia, Washington. I've been working in the horticulture industry for more than a decade. I’ve had the privilege to work in beautiful estates, nurseries and gardens from Seattle to Olympia and between. I offer garden designs that focus on enhancing the environment for my clients as well as pollinators and other wildlife. I have a particular interest in native plant design and the naturalistic movement. My goal as a designer is to bring the client's personality into a garden. Whether that’s an entire rainbow of phlox and echinacea or a monochromatic moon garden. I look forward to meeting each new challenge and seeing a project through in a timely manner. I also take pride in educating my clients on best practices for organic, environmentally minded gardening. While my specialty is plant design, I’m happy to work with other local contractors to create the space you want to spend more time in.`;

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

const Family = () => {
  return (
    <Image
      src={AboutImage}
      alt="the landscape artist standing next to a very large green plant"
      width={5024}
      height={6032}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
    />
  );
};

const ImageContainer = styled.div`
  padding: 25px 40px 10px 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: block;
  padding-right: 40px;
  margin: 0px;
  line-height: 1.7;
  @media (max-width: 1438px) {
    /* text-align: center; */
    line-height: 1.4;
    padding: 0;
  }
`;
const HeaderContainer = styled.h1`
  margin: 0;
  @media (max-width: 1438px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const About = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <ImageContainer>
            <Family />
          </ImageContainer>
          <TextContainer>
            <HeaderContainer>{AboutTitle}</HeaderContainer>
            <p>{AboutBlurb}</p>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeaderContainer>{AboutTitle}</HeaderContainer>
          <Family />
          <TextContainer>
            <p>{AboutBlurb}</p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default About;
