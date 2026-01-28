import Navigation from "./components/Navigation";
import VideoHero from "./components/VideoHero";
import Presentation from "./components/Presentation";
import ProjectsGrid from "./components/ProjectsGrid";
import Company from "./components/Company";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <VideoHero />
        <Presentation />
        <ProjectsGrid />
        <Company />
      </main>
      <Footer />
    </>
  );
}
