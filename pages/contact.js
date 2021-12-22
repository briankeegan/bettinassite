import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Description = styled.p`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Contact = ({ copy }) => {
  const { contact = {} } = copy;
  return (
    <Container id="contact">
      <h1>{contact.title}</h1>
      <Description>{contact.blurb}</Description>
    </Container>
  );
};
export default Contact;
