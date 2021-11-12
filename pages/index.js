import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../public/pics/5thAveB.jpg';

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

const UnderConstruction = styled.div`
  position: absolute;
  top: 6rem; //Header Height // how do i want the header and footer? if i dont want the top to be so close the edge of the page then i either have to do the same to the bottom or have them be different sizes...
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 4em; */
`;

function HomePage() {
  return (
    <UnderConstruction>
      <Garden />
    </UnderConstruction>
  );
}

export default HomePage;
