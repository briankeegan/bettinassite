import styled from 'styled-components';
import Image from 'next/image';

const AboutTitle = `Bettina Chanel`;

const AboutBlurb = `
Hello! I’m Bettina.

I’m a graduate of the Evergreen State College, where my focus was on native plants, organic farming and printmaking. Since graduating in 2013, I’ve kept my hands in the soil and followed the lead of the many wonderful mentors I’ve been lucky enough to know along the way. I’ve had the privilege to work on beautiful estates and gardens from Seattle to Olympia and between. In 2019, through the encouragement of coworkers and clients, I started my own landscaping business.\n

I offer garden designs that focus on enhancing the environment for my clients as well as pollinators and other wildlife. My goal as a designer is to bring the client's personality into a garden. Whether that’s an entire rainbow of phlox and echinacea or a monochromatic moon garden. I look forward to meeting each new challenge and seeing a project through. While my specialty is plant design, I’m happy to work with other local contractors to create the space you want to spend more time in.\n

When I’m not in my client’s gardens, I’m usually in mine with my toddler. When I’m home, you can find me knitting, sewing or remodeling my home and watching my favorite reality TV shows 90 Day Fiance or The Bachelor.`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;

const X = 3;
function Family() {
  return (
    <Image
      src="/pics/bettina_new_about_foto.jpeg"
      alt="the landscape artist standing next to a very large green plant"
      width={15500 / X}
      height={19000 / X}
    />
  );
}

const HeaderContainer = styled.h1`
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <HeaderContainer>{AboutTitle}</HeaderContainer>
      <Family />
      <p>{AboutBlurb}</p>
    </Container>
  );
};
export default About;
