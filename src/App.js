import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Header />
        <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;
