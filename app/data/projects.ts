export interface Project {
  title: string;
  slug: string;
  image: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Fragments",
    slug: "fragments",
    image: "/images/image_1.jpg",
    images: ["/images/image_1.jpg", "/images/image_5.jpg", "/images/image_9.jpg"],
    shortDescription: "Une exploration du mouvement et de la mémoire",
    fullDescription:
      "Fragments est une pièce chorégraphique qui explore la relation entre le corps et la mémoire. À travers des mouvements fragmentés et des pauses suspendues, cette création interroge la façon dont nos souvenirs façonnent notre présence physique.",
    year: "2024",
  },
  {
    title: "Silence",
    slug: "silence",
    image: "/images/image_2.jpg",
    images: ["/images/image_2.jpg", "/images/image_6.jpg", "/images/image_10.jpg"],
    shortDescription: "Quand le corps parle sans bruit",
    fullDescription:
      "Silence est une méditation en mouvement sur l'absence de son. Cette pièce solo invite le spectateur à observer le langage silencieux du corps, où chaque geste devient une parole inaudible.",
    year: "2023",
  },
  {
    title: "Échos",
    slug: "echos",
    image: "/images/image_3.jpg",
    images: ["/images/image_3.jpg", "/images/image_7.jpg", "/images/image_11.jpg"],
    shortDescription: "Dialogues entre corps et espace",
    fullDescription:
      "Échos met en scène la résonance entre le danseur et son environnement. Les mouvements se répercutent dans l'espace, créant un dialogue visuel entre le corps et l'architecture qui l'entoure.",
    year: "2023",
  },
  {
    title: "Traverse",
    slug: "traverse",
    image: "/images/image_4.jpg",
    images: ["/images/image_4.jpg", "/images/image_8.jpg"],
    shortDescription: "Un voyage à travers les états du corps",
    fullDescription:
      "Traverse est un parcours initiatique qui emmène le spectateur à travers différents états corporels. De la tension à l'abandon, de la vitesse à l'immobilité, cette pièce explore les multiples visages du mouvement.",
    year: "2022",
  },
];
