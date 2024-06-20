import React from "react";
import "../App.css";
import Dashboard from "./Layouts/dashboard";
import Shipment from "./Layouts/shipment";
import Order from "./Layouts/order";
import Customer from "./Layouts/customer";
import Transaction from "./Layouts/transaction";
import Help from "./Layouts/help";
import Settings from "./Layouts/settings";
import { LogoIcon, DashboardIcon, ShipmentIcon, OrderIcon, TransactionIcon, CustomerIcon, HelpIcon, SettingsIcon } from "./Icons/icon";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { act, useState } from "react";

function AdminPage() {
  const [activeContent, setActiveContent] = useState("Dashboard");
  const renderContent = () => {
    switch (activeContent) {
      case "Dashboard":
        return <Dashboard />;
      case "Shipment":
        return <Shipment />;
      case "Order":
        return <Order />;
      case "Customer":
        return <Customer />;
      case "Transaction":
        return <Transaction />;
      case "Help":
        return <Help />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="App">
      <section className="d-flex">
        <aside className="sidebar">
          <div className="mt-5">
            <LogoIcon />
          </div>

          <div className="menu-wrapper">
            <p className="mt-5 ms-3  align-self-start">MENU</p>
            <div className={`menu ${activeContent === "Dashboard" ? "active" : ""}`} onClick={() => setActiveContent("Dashboard")}>
              <DashboardIcon className="icon" isActive={activeContent === "Dashboard"} />
              <p>Dashboard</p>
            </div>
            <div className={`menu ${activeContent === "Shipment" ? "active" : ""}`} onClick={() => setActiveContent("Shipment")}>
              <ShipmentIcon className="icon" isActive={activeContent === "Shipment"} />
              <p>Shipment</p>
            </div>
            <div className={`menu ${activeContent === "Order" ? "active" : ""}`} onClick={() => setActiveContent("Order")}>
              <OrderIcon className="icon" isActive={activeContent === "Order"} />
              <p>Order</p>
            </div>
            <div className={`menu ${activeContent === "Customer" ? "active" : ""}`} onClick={() => setActiveContent("Customer")}>
              <CustomerIcon className="icon" isActive={activeContent === "Customer"} />
              <p>Customer</p>
            </div>
            <div className={`menu ${activeContent === "Transaction" ? "active" : ""}`} onClick={() => setActiveContent("Transaction")}>
              <TransactionIcon className="icon" isActive={activeContent === "Transaction"} />
              <p>Transaction</p>
            </div>
            <p className="mt-5 ms-3 align-self-start">TOOLS</p>
            <div className={`menu ${activeContent === "Help" ? "active" : ""}`} onClick={() => setActiveContent("Help")}>
              <HelpIcon className="icon" isActive={activeContent === "Help"} />
              <p>Help & Support</p>
            </div>
            <div className={`menu ${activeContent === "Settings" ? "active" : ""}`} onClick={() => setActiveContent("Settings")}>
              <SettingsIcon className="icon" isActive={activeContent === "Settings"} />
              <p>Settings</p>
            </div>
          </div>
        </aside>
        <main className="content">{renderContent()}</main>
      </section>
    </div>
  );
}

export default AdminPage;
