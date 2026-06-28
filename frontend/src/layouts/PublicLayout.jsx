import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Home/ScrollToTop";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default PublicLayout;