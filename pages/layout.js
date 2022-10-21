import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdl: 1080,
      lg: 1200,
      xl: 1350,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme} >
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}