import styled from 'styled-components';
const Container = styled.div`
  position: absolute;
  top: 0; /* Header Height */
  bottom: 0; /* Footer Height */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

const Portfolio = () => {
  return (
    <Container>
      <h1>Portfolio</h1>
    </Container>
  );
};
export default Portfolio;
