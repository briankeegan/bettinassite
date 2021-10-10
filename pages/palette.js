import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Choice = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 60rem;
  margin: 2rem 0 2rem 0;
`;

// function Airy() {
//   return <Image src="/pics/Airy.jpg" alt="Airy" width={1737} height={1513} />;
// }

const Palette = () => {
  return (
    <Container>
      <h1>Palette Choices </h1>
      <Choice color="black" />
      <Choice color="black" />
      <Choice color="black" />
    </Container>
  );
};
export default Palette;
