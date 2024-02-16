import Routes from './routes';
import theme from './themes';

import { ThemeProvider } from '@mui/material/styles';


const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
