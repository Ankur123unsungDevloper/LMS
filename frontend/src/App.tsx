import { useEffect } from 'react';
import useStore from './store/useStore';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LiveClasses from "./pages/LiveClasses";
import Assignments from "./pages/Assignments";
import Progress from "./pages/Progress";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Placement from "./pages/Placement";
import Profile from "./pages/Profile";

function App() {
  const { getUser } = useStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;