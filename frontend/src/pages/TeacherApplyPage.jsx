import PublicLayout from "../layouts/PublicLayout";
import HeroSection from "../components/teacher/HeroSection";
import BenefitsSection from "../components/teacher/BenefitsSection";
import EligibilitySection from "../components/teacher/EligibilitySection";
import TeacherApplicationForm from "../components/teacher/TeacherApplicationForm";
import FAQSection from "../components/teacher/FAQSection";

const TeacherApplyPage = () => {
  return (
    <>
    <PublicLayout>
      <HeroSection />
      <BenefitsSection />
      <EligibilitySection />
      <TeacherApplicationForm />
      <FAQSection />
      </PublicLayout>
    </>
  );
};

export default TeacherApplyPage;