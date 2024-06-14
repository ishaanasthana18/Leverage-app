import Hero from "@/components/Hero/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="main rubik background-main">
      <div className="upper-deck">
        <p>Leverage Edu Scholarship Worth ₹ 7,00,00,000</p> 
        <button className="upper-deck-button">Apply Now</button>
      </div>
      <Header />
      <Hero />
    </main>
  );
}
