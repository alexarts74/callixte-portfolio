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
    image: "/images/tournage_1.jpg",
    images: [
      "/images/tournage_1.jpg",
      "/images/tournage_2.jpg",
      "/images/company/company_1.jpg",
      "/images/company/company_2.jpg",
    ],
    shortDescription: "Une exploration du mouvement et de la mémoire",
    fullDescription:
      "Fragments est une pièce chorégraphique qui explore la relation entre le corps et la mémoire. À travers des mouvements fragmentés et des pauses suspendues, cette création interroge la façon dont nos souvenirs façonnent notre présence physique.",
    year: "2024",
  },
  {
    title: "Silence",
    slug: "silence",
    image: "/images/tournage_2.jpg",
    images: [
      "/images/tournage_2.jpg",
      "/images/tournage_1.jpg",
      "/images/company/company_3.jpg",
      "/images/company/company_4.jpg",
    ],
    shortDescription: "Quand le corps parle sans bruit",
    fullDescription:
      "Silence est une méditation en mouvement sur l'absence de son. Cette pièce solo invite le spectateur à observer le langage silencieux du corps, où chaque geste devient une parole inaudible.",
    year: "2023",
  },
  {
    title: "Échos",
    slug: "echos",
    image: "/images/image_12.jpg",
    images: [
      "/images/image_12.jpg",
      "/images/company/company_5.jpeg",
      "/images/company/company_6.png",
      "/images/tournage_1.jpg",
    ],
    shortDescription: "Dialogues entre corps et espace",
    fullDescription:
      "Échos met en scène la résonance entre le danseur et son environnement. Les mouvements se répercutent dans l'espace, créant un dialogue visuel entre le corps et l'architecture qui l'entoure.",
    year: "2023",
  },
  {
    title: "Traverse",
    slug: "traverse",
    image: "/images/image_12.jpg",
    images: [
      "/images/image_12.jpg",
      "/images/portrait.jpg",
      "/images/company/company_1.jpg",
      "/images/tournage_2.jpg",
    ],
    shortDescription: "Un voyage à travers les états du corps",
    fullDescription:
      "Traverse est un parcours initiatique qui emmène le spectateur à travers différents états corporels. De la tension à l'abandon, de la vitesse à l'immobilité, cette pièce explore les multiples visages du mouvement.",
    year: "2022",
  },
];
