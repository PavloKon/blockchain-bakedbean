import { createTheme } from '@mui/material/styles';

import themeTypography from './typography';
import themePalette from './palette';
import componentStyleOveride from './componentStyleOveride';

const theme = createTheme({
  palette: themePalette(),
  typography: themeTypography(),
  components: componentStyleOveride()
});

export default theme;