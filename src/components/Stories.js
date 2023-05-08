import Story from "./Story";

let itensStories = [
  {
    imagem: "assets/img/9gag.svg",
    alt: "9gag",
    usuario: "9gag",
  },
  {
    imagem: "assets/img/meowed.svg",
    alt: "meowed",
    usuario: "meowed",
  },
  {
    imagem: "assets/img/barked.svg",
    alt: "barked",
    usuario: "barked",
  },
  {
    imagem: "assets/img/nathanwpylestrangeplanet.svg",
    alt: "nathanwpylestrangeplanet",
    usuario: "nathanwpylestrangeplanet",
  },
  {
    imagem: "assets/img/wawawicomics.svg",
    alt: "wawawicomics",
    usuario: "wawawicomics",
  },
  {
    imagem: "assets/img/respondeai.svg",
    alt: "respondeai",
    usuario: "respondeai",
  },
  {
    imagem: "assets/img/filomoderna.svg",
    alt: "filomoderna",
    usuario: "filomoderna",
  },
  {
    imagem: "assets/img/memeriagourmet.svg",
    alt: "memeriagourmet",
    usuario: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <div className="stories">
      {itensStories.map((item) => {
        return (
          <Story
            key={item.imagem}
            imagem={item.imagem}
            alt={item.alt}
            usuario={item.usuario}
          />
        );
      })}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
