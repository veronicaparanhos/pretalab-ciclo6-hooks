import "./App.css";
import Header from "./components/Header";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Grupo Ada!" integrantes="Lis, Si e Mands" />
      <Contador />
    </div>
  );
}

export default App;
