import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoMobile from '../components/NoMobile';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useYaml, useHubSpotForm } from '../hooks';
import './_app.css';

const MIN_SIZE = '1438px';

const StyledVisibility = styled.div`
  @media (max-width: ${MIN_SIZE}) {
    display: none;
  }
`;
const StyledHidden = styled.div`
  @media (min-width: ${MIN_SIZE}) {
    display: none;
  }
`;

// font-family: 'Commissioner', sans-serif;
const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Proza Libre', sans-serif;
      color: ${(props) => props.theme.colors.oliveDrab7};
      font-size: 16px; 
  }
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    background: cover;
    /* background: no-repeat; */
    height: 100vh;
  }
  h1 {
    font-size: 3rem;
      margin: 10px;
  }
  p {
    font-size: 1.2rem;
  }
  ul {
    list-style-type: none;
  }
  .hbspt-form {
    display: ${(props) => {
      return props.showForm ? 'block' : 'none';
    }};
    width: 30rem;
    margin: 0 auto;
    @media (max-width: ${MIN_SIZE}) {
      visibility: hidden;
    }
  }
  .submitted-message {
    font-size: 1.5rem;
  }
`;

const theme = {
  colors: {
    oliveDrab7: '#3d3522ff',
    oliveDrab72: '#4a442dff',
    hunterGreen: '#386150ff',
    keppel: '#58b09cff',
    aeroBlue: '#caf7e2ff',
    operaMauve: '#b48eAe',
    lightGrey: '#D7D9D7',
    nickel: '#646E68',
    peachPuff: '#F5D6BA',
    white: '#ffff',
    floralWhite: '##FFFAF0',
    aliceBlue: '##F0F8FF',
    sapphireBlue: '#1768AC',
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const copy = useYaml();
  useHubSpotForm();
  return (
    <>
      <StyledHidden>
        <NoMobile copy={copy} />
      </StyledHidden>
      <StyledVisibility>
        <GlobalStyle theme={theme} showForm={router.asPath === '/contact'} />
        <ThemeProvider theme={theme}>
          <Header copy={copy} />
          <Component copy={copy} {...pageProps} />
          <Footer copy={copy} />
        </ThemeProvider>
      </StyledVisibility>
    </>
  );
}
