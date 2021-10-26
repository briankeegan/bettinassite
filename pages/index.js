import styled from 'styled-components';
import Image from 'next/image';


const X = 3;
function Garden() {
  return (
    <Image
      src="/pics/5thAveB.jpg"
      alt="A white house with a white fence and a new lovely new garden lanscaping in the front, with a path down the middle"
      width={3000 / X}
      height={2000 / X}
    />
  );
}

// const X = 3;
// function Family() {
//   return (
//     <Image
//       src="/pics/IMG_9877.jpg"
//       alt="Bettina holding baby"
//       width={1300 / X}
//       height={1570 / X}
//     />
//   );
// }

const ImageContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 3em;
`;

const ParagraphContainer = styled.div`
  padding-left: 25em;
  padding-right: 25em;
  text-align: justify;
  margin-bottom: 10em;
`;

const UnderConstruction = styled.div`
  position: absolute;
  top: 0; /* Header Height */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  
`;

function HomePage() {
  return (
    <UnderConstruction>
      <h1>Begonia Baschy Landscaping</h1>
      {/* how do i target this h1 since its not adding padding? --Brian */}
      <ImageContainer>
        <Garden />
      </ImageContainer>
      {/* <p>Bettina's story here?</p> */}
      <ParagraphContainer>
        <p>
          Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
          quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
          quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio
          dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
          atque corrupti, quos dolores et quas molestias excepturi sint,
          obcaecati cupiditate non provident, similique sunt in culpa, qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
      </ParagraphContainer>
    </UnderConstruction>
  );
}

export default HomePage;

