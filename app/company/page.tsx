import CompanyPage from "@/app/components/CompanyPage";

export const metadata = {
  title: "Compagnie",
  description:
    "Découvrez la compagnie de danse contemporaine fondée par Callixte. Un espace de création collective pour des projets chorégraphiques ambitieux.",
  openGraph: {
    title: "Compagnie | Callixte",
    description:
      "La compagnie de danse contemporaine fondée par Callixte.",
  },
};

export default function Company() {
  return <CompanyPage />;
}
