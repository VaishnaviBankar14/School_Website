import PublicLayout from "../layouts/PublicLayout";
import Hero from "../sections/Hero";
import StatCard from "../components/Home/StatCard";
import AboutPreview from "../components/Home/AboutPreview";
import PrincipalSection from "../components/Home/PrincipalSection";
import LatestNotices from "../components/Home/LatestNotices";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import GallerySection from "../components/Home/GallerySection";
import TestimonialSection from "../components/Home/TestimonialSection";
import CallToAction from "../components/Home/CallToAction";


function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <StatCard/>
      <AboutPreview/>
      <PrincipalSection/>
      <LatestNotices/>
      <WhyChooseUs/>
      <GallerySection/>
      <TestimonialSection/>
      <CallToAction/>
    </PublicLayout>
  );
}

export default HomePage;

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PublicLayout from "../layouts/PublicLayout";

// function HomePage() {
//   return (
//     <>
//       <Navbar />

//       <div className="container mt-5">
//         <h1>Home Page</h1>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default HomePage;