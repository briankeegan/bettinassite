import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  position: absolute;
  top: 0;
  /* bottom: 0; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  padding: 2em;
`;

const X = 3;
const Truck = () => {
  return (
    <Image
      src="/pics/truck.png"
      alt="a picture of a person standing next to a truck"
      width={2000 / X}
      height={1500 / X}
    />
  );
};

const ImageContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const ParagraphContainer = styled.div`
  padding-left: 25em;
  padding-right: 25em;
  text-align: justify;
  margin-bottom: 10em;
`;

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <ImageContainer>
        <Truck />
      </ImageContainer>
      <ParagraphContainer>
        <p>
          Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem
          sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
          dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam
          [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in
          ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
          qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et
          accusamus et iusto odio dignissimos ducimus, qui blanditiis
          praesentium voluptatum deleniti atque corrupti, quos dolores et quas
          molestias excepturi sint, obcaecati cupiditate non provident,
          similique sunt in culpa, qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </ParagraphContainer>
    </Container>
  );
};
export default About;
