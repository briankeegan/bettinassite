import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  @media (max-width: 1438px) {
    position: relative;
    margin-top: 2rem;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const FooterLi = styled.li`
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${(props) => props?.theme?.colors?.oliveDrab72};

  @media (max-width: 1438px) {
    margin: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

const Footer = ({ copy }) => {
  const { footer = [] } = copy;
  return (
    <Container>
      <FooterUl>
        {footer.map((item) => {
          return <FooterLi key={item}>{item}</FooterLi>;
        })}
      </FooterUl>
    </Container>
  );
};

export default Footer;
