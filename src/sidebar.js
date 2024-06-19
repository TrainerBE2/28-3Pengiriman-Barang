import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="image/Logo.svg" className="mt-5" />
      <p className="mt-5 ms-4 align-self-start">MENU</p>
      <div className="menu-wrapper">
        <div className="menu">
          <img src="image/Dashboard-icon.png" />
          Dashboard
        </div>
        <div className="menu">
          <img src="image/Shipment-icon.png" />
          Shipment
        </div>
        <div className="menu">
          <img src="image/Order-icon-sidebar.png" /> Order
        </div>
        <div className="menu">
          <img src="image/Customer-icon-sidebar.png" />
          Customer
        </div>
        <div className="menu">
          <img src="image/Transaction-icon.png" />
          Transaction
        </div>
      </div>
      <p className="mt-5 ms-4 align-self-start">TOOLS</p>
      <div className="menu-wrapper">
        <div className="menu">
          <img src="image/Help&Support-icon.png" />
          Help & Support
        </div>
        <div className="menu">
          <img src="image/Setting-icon.png" /> Settings
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
