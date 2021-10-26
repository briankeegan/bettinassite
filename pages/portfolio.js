import styled from 'styled-components';
import Image from 'next/image';
// why are the photos taking so much time to load?

const Container = styled.div`
  position: absolute;
  top: 0;
  /* bottom: 0; //Footer Height */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  padding: 2em;
`;

// find out why photos are loading so slow!
const X = 3;
const Central = () => {
  return (
    <Image
      src="/pics/CentralStreetA.jpg"
      alt="A beautiful landscape by Bettina Baschy lanscapes"
      width={2035 / X}
      height={1570 / X}
    />
  );
};

const _5thAveB = () => {
  return (
    <Image
      src="/pics/5thAveB.jpg"
      alt="A beautiful finished landscape by Bettina Baschy Lanscaping"
      width={2035 / X}
      height={1570 / X}
    />
  );
};
const _5thAveC = () => {
  return (
    <Image
      src="/pics/5thAveC.jpg"
      alt="A beautiful finished landscape by Bettina Baschy Lanscaping"
      width={2035 / X}
      height={1570 / X}
    />
  );
};
const _5thAveD = () => {
  return (
    <Image
      src="/pics/5thAveD.jpg"
      alt="A beautiful finished landscape by Bettina Baschy Lanscaping"
      width={2035 / X}
      height={1570 / X}
    />
  );
};
const _5thAveI = () => {
  return (
    <Image
      src="/pics/5thAveIMG_8708.jpg"
      alt="A beautiful finished landscape by Bettina Baschy Lanscaping"
      width={2035 / X}
      height={1570 / X}
    />
  );
};

const ImageContainer = styled.div`
  margin-top: 3em;
  margin-bottom: 5em;
`;

const Portfolio = () => {
  return (
    <Container>
      <h1>Portfolio</h1>
      <ImageContainer>
        <Central />
      </ImageContainer>
      <ImageContainer>
        <_5thAveB />
      </ImageContainer>
      <ImageContainer>
        <_5thAveC />
      </ImageContainer>
      <ImageContainer>
        <_5thAveD />
      </ImageContainer>
      <ImageContainer>
        <_5thAveI />
      </ImageContainer>
    </Container>
  );
};
export default Portfolio;
