import styled from 'styled-components';
import Image from 'next/image';
import BeforeCentral from '../public/pics/CentralStreetC.jpg';
import AfterCentral from '../public/pics/CentralStreetB.jpg';
import BeforeTullis from '../public/pics/TullisStreetIMG_0381.png';
import AfterTullis from '../public/pics/TullisStreetIMG_0374.jpg';
import _5thAveMaintenance from '../public/pics/5thAveIMG_8708.jpg';
import _5thAveMaintenance_2 from '../public/pics/5thAveC.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 5rem;
`;

const ImageContainer = styled.div`
  padding: 0.5rem;
  @media (min-width: 1438px) {
    display: inline-block;
  }
`;

const MyImage = ({ src, alt }) => {
  const X = 3;
  return <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />;
};

function Services() {
  return (
    <Container>
      <ul>
        <StyledLi>Design</StyledLi>
        <ImageContainer>
          <MyImage
            src={BeforeTullis}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
          />
        </ImageContainer>
        <ImageContainer>
          <MyImage
            src={AfterTullis}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
          />
        </ImageContainer>

        <StyledLi>Install</StyledLi>
        <ImageContainer>
          <MyImage
            src={BeforeCentral}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
          />
        </ImageContainer>
        <ImageContainer>
          <MyImage
            src={AfterCentral}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
          />
        </ImageContainer>
        <StyledLi>Maintenance</StyledLi>
        <ImageContainer>
          <MyImage
            src={_5thAveMaintenance}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
          />
        </ImageContainer>
        <ImageContainer>
          <MyImage
            src={_5thAveMaintenance_2}
            alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
          />
        </ImageContainer>
      </ul>
    </Container>
  );
}

export default Services;
