import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

import HomePage from "./pages/HomePage";
// import AboutPreview from "./components/AboutPreview";
import NoticePage from "./pages/NoticePage";
import TeacherApplyPage from "./pages/TeacherApplyPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import TeacherApplications from "./admin/TeacherApplications";
import StudentAdmissions from "./admin/StudentAdmissions";
import ContactMessages from "./admin/ContactMessages";
import NoticeManagement from "./admin/NoticeManagement";
import AboutPage from "./pages/AboutPage";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80,
  });
}, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPreview />} /> */}
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/teacher-apply" element={<TeacherApplyPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/contact" element={<ContactPage />} />
<Route path="/about" element={<AboutPage />} />

        {/* Admin Routes */}

<Route
  path="/admin/login"
  element={<AdminLogin />}
/>

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/teachers"
          element={<TeacherApplications />}
        />

        <Route
          path="/admin/admissions"
          element={<StudentAdmissions />}
        />

        <Route
          path="/admin/contacts"
          element={<ContactMessages />}
        />

        <Route
          path="/admin/notices"
          element={<NoticeManagement />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;