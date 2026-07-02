import PublicLayout from "../layouts/PublicLayout";
import HeroSection from "../components/admission/HeroSection";
import AdmissionProcess from "../components/admission/AdmissionProcess";
import EligibilitySection from "../components/admission/EligibilitySection";
import RequiredDocuments from "../components/admission/RequiredDocuments";
import AdmissionForm from "../components/admission/AdmissionForm";
import FAQSection from "../components/admission/FAQSection";

const AdmissionPage = () => {
  return (
    <>
    <PublicLayout>
      <HeroSection />
      <AdmissionProcess />
      <EligibilitySection />
      <RequiredDocuments />
      <AdmissionForm />
      <FAQSection />
      </PublicLayout>
    </>
  );
};

export default AdmissionPage;