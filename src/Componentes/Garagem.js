import Carro from "./Carro";

function Garagem(props) {
  console.log(props);

  return (
    <div>
      <h1>Garagem do {props.nome} </h1>
      
      <Carro 
      carro={props.carro1}
      />
      
      <Carro 
      carro={props.carro2}
      />
      
    </div>
  );
};

export default Garagem;
