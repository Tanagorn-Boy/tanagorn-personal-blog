import { NavBar, Footer } from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ArticlesSection from "../components/ArticleSection.jsx";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <HeroSection />
        <ArticlesSection />
      </div>
      <Footer />
    </div>
  );
}
