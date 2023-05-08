import { useState } from "react";

export default function User() {
  let [usuario, setUsuario] = useState("catanacomics");
  let [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  function mudarUsuario() {
    let novoUsuario = prompt("Digite seu nome de usuário.");
    if (novoUsuario !== "" && novoUsuario !== undefined && novoUsuario !== null)
      setUsuario(novoUsuario);
  }

  function mudarImagem() {
    let novaImagem = prompt("Insira o link de uma imagem.");
    if (novaImagem !== "" && novaImagem !== undefined && novaImagem !== null)
      setImagem(novaImagem);
  }

  return (
    <div className="usuario">
      <img
        data-test="profile-image"
        onClick={mudarImagem}
        src={imagem}
        alt="imagem de perfil"
      />
      <div className="texto">
        <span>
          <strong data-test="name"> {usuario} </strong>
          <ion-icon
            data-test="edit-name"
            onClick={mudarUsuario}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
