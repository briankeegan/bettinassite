import styled from 'styled-components';
const Container = styled.div`
  text-align: center;
`;

const Description = styled.p`
  width: 40rem;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <h1>Contact me!</h1>
      <Description>
        {
          "I'd love to hear about your project!  I specialize in being amazing with plants and trees and things like that. I'm sure i'll have more to say, but right now a ghost writer write this for me."
        }
      </Description>
    </Container>
  );
};
export default Contact;
