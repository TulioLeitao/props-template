function Carro(props) {
  return (
    <div>
      <h2>{props.carro.nomeDoCarro}</h2>
      <ul>
        <li>{props.carro.cor}</li>
        <li>{props.carro.ano}</li>
        <li>{props.carro.flex}</li>
      </ul>
    </div>
  );
};

export default Carro;
