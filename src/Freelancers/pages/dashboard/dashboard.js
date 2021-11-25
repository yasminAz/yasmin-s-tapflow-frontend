import React from "react";
import "./dashboard.css";

import SeeActiveProjects from "./see_active_projects/see_active_projects";
import SeePendingProjects from "./see_pending_projects/see_pending_projects";
import SeeNotifications from "./see-notifications/see-notifications";
import SeeSuggestedProjects from "./see_suggested_projects/see_suggested_projects";

export const FlDashboard = () => {
  return (
    <div>
      {/* <button onClick={() => dispatch(logoutUser())}>Logout</button> */}

      <div className="see-projects-row">
        <SeeActiveProjects />
        <SeePendingProjects />
      </div>
      <div className="see-projects-row">
        <SeeNotifications />
        <SeeSuggestedProjects />
      </div>
    </div>
  );
};

export default FlDashboard;
