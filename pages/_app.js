import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './_app.css';

// font-family: 'Commissioner', sans-serif;
const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Proza Libre', sans-serif;
      color: ${(props) => props.theme.colors.oliveDrab7}
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #7CF0BD;
  }
  h1 {
    font-size: 4rem;
      margin: 10px;
  }
  p {
    font-size: 1.5rem;
  }
  ul {
    list-style-type: none;
  }
  .hbspt-form {
    display: ${(props) => {
      console.log(props.showForm);
      return props.showForm ? 'block' : 'none';
    }};
    width: 30rem;
    margin: 0 auto;
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
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const exists = useRef();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt && !exists.current) {
        exists.current = true;
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '7640600',
          formId: '208ef12e-c09e-4398-ae9b-688f681ff43e',
        });
      }
    });
  }, []);
  return (
    <>
      <GlobalStyle theme={theme} showForm={router.asPath === '/contact'} />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
