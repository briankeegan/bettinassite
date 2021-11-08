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
          "Want to get in touch? To schedule a consultation or if you have other questions, please complete the form below."
        }
      </Description>
    </Container>
  );
};
export default Contact;
