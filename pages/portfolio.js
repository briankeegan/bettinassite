import styled from 'styled-components';
import Image from 'next/image';
import Central from '../public/pics/CentralStreetA.jpg';
import _5thAveB from '../public/pics/5thAveB.jpg';
import _5thAveC from '../public/pics/5thAveC.jpg';
import _5thAveD from '../public/pics/5thAveD.jpg';
import _5thAveE from '../public/pics/5thAveIMG_8708.jpg';

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

const PortfolioImages = ({ src, alt }) => {
  const X = 3;
  return <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />;
};

const ImageContainer = styled.div`
  margin-bottom: 1rem;
`;

const Portfolio = () => {
  return (
    <Container>
      <ImageContainer>
        <PortfolioImages
          src={Central}
          alt="A beautiful landscape by Bettina Baschy landscapes"
        />
      </ImageContainer>
      <ImageContainer>
        <PortfolioImages
          src={_5thAveB}
          alt="A beautiful landscape by Bettina Baschy landscapes"
        />
      </ImageContainer>
      <ImageContainer>
        <PortfolioImages
          src={_5thAveC}
          alt="A beautiful landscape by Bettina Baschy landscapes"
        />
      </ImageContainer>
      <ImageContainer>
        <PortfolioImages
          src={_5thAveD}
          alt="A beautiful landscape by Bettina Baschy landscapes"
        />
      </ImageContainer>
      <ImageContainer>
        <PortfolioImages
          src={_5thAveE}
          alt="A beautiful landscape by Bettina Baschy landscapes"
        />
      </ImageContainer>
    </Container>
  );
};
export default Portfolio;
