import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Classes from "./pages/Classes";
import Resources from "./pages/Resources";
import Review from "./pages/Review";
import Earnings from "./pages/Earnings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/earnings" element={<Earnings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
