import { SearchProvider } from "./context/SearchProvider";
import { ThemeProvider } from '@mui/material/styles';
import { HomePage } from "./pages/HomePage";
import "./styles.css";
import { theme } from "./theme/themeConfig";
import { DetailsPage } from "./pages/DetailsPage";
import { AppRoutes } from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";

function WeatherApp() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SearchProvider>
        <AppRoutes/>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default WeatherApp;
