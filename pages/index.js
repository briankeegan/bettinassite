import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../public/pics/5thAveB.jpg';

const X = 4;
function Garden() {
  return (
    <Image
      src={BackgroundImage}
      alt="A white house with a white fence and a new lovely new garden lanscaping in the front, with a path down the middle"
      width={6750 / X}
      height={3000 / X}
      // width={4025 / X}
      // height={2528 / X}
    />
  );
}

const ImageContainer = styled.div`
  padding: 0;
  margin: 0;
`;

//Background image notes
/* position: fixed; */
/* background-image: url(${BackgroundImage});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

// writing notes
//   padding-left: 10rem;
//   padding-right: 10rem;
//   text-align: justify;
//   margin-bottom: 5em;
//   font-size: 1.5rem;

const UnderConstruction = styled.div`
  position: absolute;
  top: 0; //Header Height
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

function HomePage() {
  return (
    <UnderConstruction>
      <ImageContainer>
        <Garden />
      </ImageContainer>
    </UnderConstruction>
  );
}

export default HomePage;
