import Image from "next/image";
import { Inter } from "next/font/google";
import logo from '../../leverage-app/pages/assests/download.jpeg'


const inter = Inter({ subsets: ["latin"] });

const Testimonials = () => {
const slideForward = () => {
if(tx > -50){
  tx -= 25;
}
Slider.current.style.transform = 'translateX(${tx}%';
}

const slideBackward = () => {
  if(tx < 0 ){
    tx += 25;
  }

Slider.current.style.transform = 'translateX(${tx}%';

return (
  <div className="'testimonials">
    <img src="nexticon.png" alt="" className='next-btn'/>
    <img src="" alt="" className='naxt-btn'/>
    <div className="slider"></div>
  </div>
)

}

}
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
      <nav className="container">
        <img src= "https://leverageeduhome.gumlet.io/logo-dark.svg" alt ="" className="logo"/>
        <ul>
            <li>Study Aborad</li>
            <li>Accomodation</li>
            <li>Test Prep</li>
            <li>Finance</li>
            <li>Coummunity</li>
            <li>Products</li>
            <li>More</li>
            <li><img ></img></li>
        </ul>
    </nav>
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1>First in the Family</h1>
          <p>They are the global citizens of tomorrow. Start your study abroad journey today.</p>
          <br/>
          <br/>
          <button className="btn1">live on <img src={logo}/></button>
          <br/>
          <br/>
          <br/>
          <button className="btn2">Get Your shortlist for Free</button>
          <br/>
          <br/>
          <button className="btn3">Talk to an expert </button>
          
        </div>
      </div>
      <div className="foot">
        <p>95% of our students get an admit in less than 4 weeks</p>
        <br/>
        <br/>
        <br/>
        <p>Our students finished university to work at global offices of:</p>
      </div>
      <div className="office">
        <ul>
          <li>Google</li>
          <li>Google</li>
          <li>Google</li>
          <li>Google</li>
        </ul>
      </div>
    </main>
  );
}

