import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../public/pics/5thAveB.jpg';
import { useIsTabletOrMobile } from '../hooks';
import Footer from '../components/Footer';

const X = 4;
function Garden() {
  return (
    <Image
      src={BackgroundImage} //pass in image
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={6032 / X}
      height={3024 / X}
      // 4032 × 3024 OG
    />
  );
}

const Y = 4;
function GardenMobile() {
  return (
    <Image
      src={BackgroundImage} //pass in image
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={4032 / Y}
      height={3024 / Y}
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

  @media (max-width: 1438px) {
    border: 10px #ffffff solid;
  }
`;

function HomePage({ copy }) {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && <Garden />}
      {isTabletOrMobile && (
        <>
          <GardenMobile />
          <Footer copy={copy} />
        </>
      )}
    </Container>
  );
}

export default HomePage;
