import Navigation from "./components/Navigation";
import VideoHero from "./components/VideoHero";
import Presentation from "./components/Presentation";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <VideoHero />
        <Presentation />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
