import Post from "./Post";

let elementosPosts = [
  {
    imagemUsuario: "assets/img/meowed.svg",
    altUsuario: "meowed",
    nomeUsuario: "meowed",
    imagemPost: "assets/img/gato-telefone.svg",
    altPost: "gato-telefone",
    imagemCurtida: "assets/img/respondeai.svg",
    altCurtida: "respondeai",
    usuarioCurtida: "respondeai",
    numCurtidas: 101523,
  },

  {
    imagemUsuario: "assets/img/barked.svg",
    altUsuario: "barked",
    nomeUsuario: "barked",
    imagemPost: "assets/img/dog.svg",
    altPost: "dog",
    imagemCurtida: "assets/img/adorable_animals.svg",
    altCurtida: "adorable_animals",
    usuarioCurtida: "adorable_animals",
    numCurtidas: 99159,
  },

  {
    imagemUsuario: "assets/img/logo-Driven.png",
    altUsuario: "driven",
    nomeUsuario: "driven",
    imagemPost: "assets/img/post-Driven.jpeg",
    altPost: "driven",
    imagemCurtida: "assets/img/foto-perfil.jpeg",
    altCurtida: "henriqueluiz6x1",
    usuarioCurtida: "henriqueluiz6x1",
    numCurtidas: 201436,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {elementosPosts.map((i) => {
        return (
          <Post
            key={i.nomeUsuario}
            imagemUsuario={i.imagemUsuario}
            altUsuario={i.altUsuario}
            nomeUsuario={i.nomeUsuario}
            imagemPost={i.imagemPost}
            altPost={i.altPost}
            imagemCurtida={i.imagemCurtida}
            altCurtida={i.altCurtida}
            usuarioCurtida={i.usuarioCurtida}
            numCurtidas={i.numCurtidas}
          />
        );
      })}
    </div>
  );
}
