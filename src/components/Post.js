import { useState } from "react";

export default function Post(props) {
  let [iconSave, setSave] = useState("bookmark-outline");
  let [iconHeart, setHeart] = useState("heart-outline");
  let [classeHeart, setClasse] = useState("");
  let [numLikes, setLikes] = useState(props.numCurtidas);
  let countLikes = numLikes;

  function salvarPost(salvo) {
    if (salvo === "bookmark-outline") setSave("bookmark");
    else setSave("bookmark-outline");
  }

  function curtirPost(coracao) {
    if (coracao === "heart-outline") {
      setHeart("heart");
      setClasse("curtido");
      setLikes(countLikes + 1);
    } else {
      setHeart("heart-outline");
      setClasse("");
      setLikes(countLikes - 1);
    }
  }

  function curtirImagem() {
    if (classeHeart === "") {
      setHeart("heart");
      setClasse("curtido");
      setLikes(countLikes + 1);
    }
  }

  return (
    <div>
      <div data-test="post" className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imagemUsuario} alt={props.altUsuario} />
            <p>{props.nomeUsuario}</p>
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img
            data-test="post-image"
            onClick={curtirImagem}
            src={props.imagemPost}
            alt={props.altPost}
          />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon
                data-test="like-post"
                class={classeHeart}
                onClick={() => curtirPost(iconHeart)}
                name={iconHeart}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                onClick={() => salvarPost(iconSave)}
                name={iconSave}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.imagemCurtida} alt={props.altCurtida} />
            <div data-test="likes-number" className="texto">
              Curtido por <strong>{props.usuarioCurtida}</strong> e{" "}
              <strong>outras {numLikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
