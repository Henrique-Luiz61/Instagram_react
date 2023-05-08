export default function Suggestion(props) {
  return (
    <div>
      <div className="sugestao">
        <div className="usuario">
          <img src={props.imagem} alt={props.alt} />
          <div className="texto">
            <div className="nome"> {props.usuario} </div>
            <div className="razao"> {props.razao} </div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    </div>
  );
}
