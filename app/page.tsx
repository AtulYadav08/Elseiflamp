import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
        {/* Background iframe - optional, you can remove this or replace with your own background */}
        <iframe 
          src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO" 
          className="fixed top-0 w-full h-screen -z-10" 
          style={{ border: 'none' }}
        />
      </main>
    </>
  )
}