import styled from 'styled-components';
import Image from 'next/image';
import Footer from './Footer';

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
const StyledH1 = styled.h1`
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 1.5rem;
  margin-left: 3rem;
  margin-right: 3rem;
  text-align: center;
`;
// background-image: url('/pics/truck.png');

function NoMobile(props) {
  return (
    <UnderConstruction>
      <h1>Mobile verion coming soon!</h1>
      <StyledP>
        In the meantime, please use your computational device, or (BIG) tablet -
        that site works!
      </StyledP>
      <ImageContainer>
        <Truck />
      </ImageContainer>
      <Footer {...props} />
    </UnderConstruction>
  );
}

export default NoMobile;
