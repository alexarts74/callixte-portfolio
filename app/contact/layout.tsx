import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Callixte pour des collaborations, résidences artistiques, performances ou toute autre demande. Danseuse et chorégraphe contemporaine basée à Paris.",
  openGraph: {
    title: "Contact | Callixte",
    description:
      "Contactez Callixte pour des collaborations, résidences artistiques et performances.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
