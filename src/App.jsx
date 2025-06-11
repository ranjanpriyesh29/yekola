import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Classes from "./pages/Classes";
import Resources from "./pages/Resources";
import Review from "./pages/Review";
import Earnings from "./pages/Earnings";
import StudentDashboardHome from "./pages/StudentDashboardHome";
import StudentClasses from "./pages/StudentClasses";
import StudentProgress from "./pages/StudentProgress";
import StudentCertificates from "./pages/StudentCertificates";
import StudentProfile from "./pages/StudentProfile";
import Welcome from "./pages/Welcome";
import InstructorProfile from "./pages/InstructorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* Instructor Routes */}
        <Route path="/instructor" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="classes" element={<Classes />} />
          <Route path="resources" element={<Resources />} />
          <Route path="reviews" element={<Review />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile" element={<InstructorProfile />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<DashboardLayout />}>
          <Route index element={<StudentDashboardHome />} />
          <Route path="classes" element={<StudentClasses />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="certificates" element={<StudentCertificates />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
