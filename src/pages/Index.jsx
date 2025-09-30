import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Academics />
      <Footer />
     
    </main>
  );
};

export default Index;