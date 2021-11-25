import React from "react";
import "./see-notifications.css";

function SeeNotifications() {
  return (
    <div className="see-all-notifications">
      <div className="see-all-notifications-header">
        <div className="see-all-notifications-title">Notifications</div>
        <div className="see-all-notifications-btn">See all notifications</div>
      </div>
      <div className="see-all-notifications-col ">
        <div className="see-all-notifications-box">new message</div>
        <div className="see-all-notifications-box">new message</div>
        <div className="see-all-notifications-box">new message</div>
        <div className="see-all-notifications-box">new message</div>
      </div>
    </div>
  );
}

export default SeeNotifications;
