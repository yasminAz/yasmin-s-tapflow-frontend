import React from "react";
import { Link, Route } from "react-router-dom";
import FlNavbar from "../../components/fl-navbar/fl-navbar";
import ActiveProjectsPage from "../active-project-page/active-project-page";
import FlDashboard from "../dashboard/dashboard";
import { ExploreProject } from "../fl-explore-projects/fl-explore-projects";
import FlProfilePage from "../fl-profile-page/fl-profile-page";
import PendingProjectsPage from "../pending-project-page/pending-project-page";

function FlMainContainer() {
  return (
    <div>
      <FlNavbar>
        {" "}
        <Route path="/flUser/main/dashboard" component={FlDashboard} />
        <Route
          path="/flUser/main/active-projects"
          component={ActiveProjectsPage}
        />
        <Route
          path="/flUser/main/pending-projects"
          component={PendingProjectsPage}
        />
        <Route
          path="/flUser/main/explore-projects"
          component={ExploreProject}
        />
        <Route path="/flUser/main/fl-profile-page" component={FlProfilePage} />
      </FlNavbar>
    </div>
  );
}

export default FlMainContainer;
