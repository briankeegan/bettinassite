import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../hooks';
import BeforeCentral from '../public/pics/CentralStreetC.jpg';
import AfterCentral from '../public/pics/CentralStreetB.jpg';
import BeforeTullis from '../public/pics/TullisStreetIMG_0381.png';
import AfterTullis from '../public/pics/TullisStreetIMG_0374.jpg';
import _5thAveMaintenance from '../public/pics/5thAveIMG_8708.jpg';
import _5thAveMaintenance_2 from '../public/pics/5thAveC.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  padding: 2rem;
  display: block;
`;

const ServicesImage = ({ src, alt }) => {
  const X = 3;
  return <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />;
};
const Gap = styled.div`
  width: 100%;
  height 1rem;
`;

const ImageContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    width: inherit;
  }
`;

function Services() {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <StyledH2>Design</StyledH2>
      <ImageContainer>
        <ServicesImage
          src={BeforeTullis}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        {isTabletOrMobile && <Gap />}
        <ServicesImage
          src={AfterTullis}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageContainer>

      <StyledH2>Install</StyledH2>
      <ImageContainer>
        <ServicesImage
          src={BeforeCentral}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        {isTabletOrMobile && <Gap />}
        <ServicesImage
          src={AfterCentral}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageContainer>

      <StyledH2>Maintenance</StyledH2>
      <ImageContainer>
        <ServicesImage
          src={_5thAveMaintenance}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        {isTabletOrMobile && <Gap />}
        <ServicesImage
          src={_5thAveMaintenance_2}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageContainer>
    </Container>
  );
}

export default Services;
