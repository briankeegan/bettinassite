import styled from 'styled-components';
import Image from 'next/image';

const X = 3;
function Truck() {
  return (
    <Image
      src="/pics/truck.png"
      alt="Bettina next to loaded truck"
      width={1874 / X}
      height={1412 / X}
    />
  );
}

const ImageContainer = styled.div`
  margin-top: 5em;
`;

const UnderConstruction = styled.div`
  position: absolute;
  top: 0; /* Header Height */
  bottom: 0; /* Footer Height */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;
// background-image: url('/pics/truck.png');

function HomePage() {
  return (
    <UnderConstruction>
      <h1>New website coming soon!</h1>
      <p>
        In the meantime, please check out my{' '}
        <a
          href="https://www.instagram.com/begoniabaschy/"
          rel="noreferrer"
          target="_blank"
        >
          instagram
        </a>
      </p>
      <ImageContainer>
        <Truck />
      </ImageContainer>
    </UnderConstruction>
  );
}

export default HomePage;
