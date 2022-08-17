import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from './Page.styles';
import GlobalStyle from '../../config/GlobalStyle';
import { theme } from '../../config/theme';
import Routes from '../../router/routes';

const Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Container>
        <Main>
          <Routes />
        </Main>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);

export default Page;
