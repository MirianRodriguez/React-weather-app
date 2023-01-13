import { cyan, orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material';

export const theme = createTheme ({
  palette: {
      primary: {
          main: orange[500]
      },
      secondary: {
          main: cyan[500]
      },
      error: {
          main: red.A400
      }
  }
})