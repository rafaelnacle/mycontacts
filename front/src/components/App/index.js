import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';

import { Container } from './styles';

import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

// Browse Router: componente que habilita as funções de rotas do sistema
// Theme Provider: envia os temas para as camadas mais abaixo(filhos)
// GlobalStyles: estilos globais como margens, fontes etc...
// Routes: é a parte dinâmica da aplicação, onde muda em cada rota acessada
