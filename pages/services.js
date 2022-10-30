import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../hooks';
import BeforeSeattle from '../public/BeforeAfterNew/before seattle.jpg';
import AfterSeattle from '../public/BeforeAfterNew/after seattle.jpg';
import BeforeMeade from '../public/BeforeAfterNew/meade before 1.jpg';
import AfterMeade from '../public/BeforeAfterNew/meade after 1.jpg';
import BeforeMeade2 from '../public/BeforeAfterNew/meade before 2.jpg';
import AfterMeade2 from '../public/BeforeAfterNew/meade after 2.jpg';
import BeforeBridge from '../public/BeforeAfterNew/bridge before.jpg';
import AfterBridge from '../public/BeforeAfterNew/bridge after.jpg';
import BeforeStairs from '../public/BeforeAfterNew/before stairs.jpg';
import AfterStairs from '../public/BeforeAfterNew/after stairs.jpg';
import Banner from '../public/BeforeAfterNew/please use.jpg';
import _5thAveMaintenance from '../public/pics/5thAveIMG_8708.jpg';
import _5thAveMaintenance_2 from '../public/pics/5thAveC.jpg';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  padding: 2em;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  padding: 2rem;
  display: block;
  font-style: italic;
`;

const ImageContainer = styled.div`
  margin-bottom: 1rem;
`;

const ServicesImage = ({ src, alt }) => {
  const X = 3.1;
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />
    </ImageContainer>
  );
};
const MaintenanceImage = ({ src, alt }) => {
  const X = 3;
  return (
    //4032 × 1283
    <ImageContainer>
      <Image src={src} alt={alt} width={4032 / X} height={1283 / X} />
    </ImageContainer>
  );
};

const ImageGrouping = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1438px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

function Services() {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <StyledH2>Design</StyledH2>
      <ImageGrouping>
        <ServicesImage
          src={BeforeSeattle}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={AfterSeattle}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>
      {/* meade */}
      <ImageGrouping>
        <ServicesImage src={BeforeMeade} alt="" />
        <ServicesImage src={AfterMeade} alt="" />
      </ImageGrouping>
      {/* Meade 2 */}
      <ImageGrouping>
        <ServicesImage src={BeforeMeade2} alt="" />
        <ServicesImage src={AfterMeade2} alt="" />
      </ImageGrouping>

      <StyledH2>Install</StyledH2>
      <ImageGrouping>
        <ServicesImage
          src={BeforeBridge}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={AfterBridge}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>
      {/* stairs */}
      <ImageGrouping>
        <ServicesImage
          src={BeforeStairs}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={AfterStairs}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>

      <StyledH2>Maintenance</StyledH2>
      <ImageGrouping>
        {!isTabletOrMobile && (
          <>
            <MaintenanceImage src={Banner} alt="" />
          </>
        )}
      </ImageGrouping>
      {/* mobile */}
      <ImageGrouping>
        {isTabletOrMobile && (
          <>
            <ServicesImage
              src={_5thAveMaintenance}
              alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
            />
            <ServicesImage
              src={_5thAveMaintenance_2}
              alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
            />
          </>
        )}
      </ImageGrouping>
    </Container>
  );
}

export default Services;
