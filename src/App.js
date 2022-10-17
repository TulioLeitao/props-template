import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() { //app é o pai de todos os elementos. 
 const carro1 = {
  nomeDoCarro: "Opala",
  ano: 1968,
  cor: "Preto",
  flex: false

 }

 const carro2 = {
  nomeDoCarro: "Rolls-Royce Boat Tail",
  ano: 2022,
  cor: "Madeira",
  flex: true

 }
 
  return (
    <div>
      <Garagem 
      nome = {"Túlio"}
      carro1 = {carro1}
      carro2 = {carro2}
      />
    </div>
  );
};

