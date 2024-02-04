import { useState } from "react";
import DashboardNavbar from "../../../components/Shared/DashboardNavbar";
import MyCourseCard from "../../../components/Dashboard/MyCourseCard";

export default function Mycourses() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        style={{ backgroundColor: "#03353C" }}
        className={`${
          isSidebarOpen ? "ml-64" : "ml-12"
        } transition-all flex-grow p-4 min-h-screen`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          <MyCourseCard />
        </div>
      </div>
    </div>
  );
}
