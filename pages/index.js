import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../public/pics/NEW homepage photo.jpg';
import BackgroundImageMobile from '../public/pics/NEW homepage photo_cropped.jpg';
import { useIsTabletOrMobile } from '../hooks';
import Footer from '../components/Footer';

const Garden = () => {
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
};

const WIDTH = 2427;
const HEIGHT = 3224;

const GardenMobile = () => {
  return (
    <Image
      src={BackgroundImageMobile}
      alt="A garden of blue and pink hydrangeas"
      width={WIDTH}
      height={HEIGHT}
      placeholder="blur"
    />
  );
};

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
  line-height: 1;
`;

const HomePage = ({ copy }) => {
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
};

export default HomePage;
