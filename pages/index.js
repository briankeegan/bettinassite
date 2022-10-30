import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../public/pics/NEW homepage photo.jpg';
import { useIsTabletOrMobile } from '../hooks';
import Footer from '../components/Footer';

function Garden() {
  return (
    <Image
      src={BackgroundImage}
      alt="A garden of blue and pink hydrangeas"
      width={4032}
      height={1904}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
      priority
    />
  );
}

function GardenMobile() {
  return (
    <Image
      src={BackgroundImage}
      alt="A garden of blue and pink hydrangeas"
      width={4032}
      height={3024}
      placeholder="blur"
    />
  );
}

const Container = styled.div`
  position: absolute;
  top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooterContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 6.5rem;
  @media (max-height: 800px) {
    margin-top: 5.5rem;
  }
  @media (max-height: 750px) {
    margin-top: 4rem;
  }
  @media (max-height: 667px) {
    margin-top: 3rem;
  }
  @media (max-height: 640px) {
    margin-top: 2rem;
  }
  @media (max-height: 600px) {
    margin-top: 0;
  }
`;

function HomePage({ copy }) {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && <Garden />}
      {isTabletOrMobile && (
        <>
          <div>
            <GardenMobile />
          </div>
          <StyledFooterContainer>
            <Footer copy={copy} />
          </StyledFooterContainer>
        </>
      )}
    </Container>
  );
}

export default HomePage;
