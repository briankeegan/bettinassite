import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  position: absolute;
  top: 0;
  /* bottom: 0; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
  padding: 2em;
`;

const X = 3;
function Family() {
  return (
    <Image
      src="/pics/bettina_new_about_foto.jpeg"
      alt="the lanscape artist standing next to a very large green plant"
      width={15500 / X}
      height={19000 / X}
      // width={3024 / X} // original 
      // height={4032 / X} //original 3024 × 4032
    />
  );
}

const ImageContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const ParagraphContainer = styled.div`
  padding: 9rem;
  /* text-align: justify; */
`;

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Family />
      </ImageContainer>

      <ParagraphContainer>
        <h1>Bettina Chanel</h1>
        Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem
        sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor
        sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do]
        eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
        voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui
        dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et
        accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
        voluptatum deleniti atque corrupti, quos dolores et quas molestias
        excepturi sint, obcaecati cupiditate non provident, similique sunt in
        culpa, qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga.
      </ParagraphContainer>
    </Container>
  );
};
export default About;
