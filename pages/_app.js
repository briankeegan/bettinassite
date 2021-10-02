import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './_app.css';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Zilla Slab', serif;
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
`;

const theme = {
  colors: {
    yellow: 'yellow',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
