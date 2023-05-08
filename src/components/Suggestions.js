import Suggestion from "./Suggestion";

export default function Suggestions() {
  let itensSuggestions = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      alt: "bad.vibes.memes",
      usuario: "bad.vibes.memes",
      razao: "Segue você",
    },

    {
      imagem: "assets/img/chibirdart.svg",
      alt: "chibirdart",
      usuario: "chibirdart",
      razao: "Segue você",
    },

    {
      imagem: "assets/img/razoesparaacreditar.svg",
      alt: "razoesparaacreditar",
      usuario: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },

    {
      imagem: "assets/img/adorable_animals.svg",
      alt: "adorable_animals",
      usuario: "adorable_animals",
      razao: "Segue você",
    },

    {
      imagem: "assets/img/smallcutecats.svg",
      alt: "smallcutecats",
      usuario: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {itensSuggestions.map((item) => {
        return (
          <Suggestion
            key={item.usuario}
            imagem={item.imagem}
            alt={item.alt}
            usuario={item.usuario}
            razao={item.razao}
          />
        );
      })}
    </div>
  );
}
