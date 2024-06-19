import "./App.css";
import { DashboardIcon, ShipmentIcon, OrderIcon, CustomerIcon, TransactionIcon, HelpandSupportIcon, SettingIcon, HelpIcon } from "./components/icon/icon";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Shipment from "./shipment";
import Order from "./order";
import Customer from "./customer";
import Transaction from "./transaction";
import Help from "./help";
import Setting from "./setting";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { act, useState } from "react";

function App() {
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
      case "Setting":
        return <Setting />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="App">
      <section className="d-flex">
        <aside className="sidebar">
          <img src="image/Logo.svg" className="mt-5" />
          <p className="mt-5 ms-4 align-self-start">MENU</p>
          <div className="menu-wrapper">
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
          </div>
          <p className="mt-5 ms-4 align-self-start">TOOLS</p>
          <div className="menu-wrapper">
            <div className={`menu ${activeContent === "Help" ? "active" : ""}`} onClick={() => setActiveContent("Help")}>
              <HelpIcon className="icon" isActive={activeContent === "Help"} />
              <p>Help & Support</p>
            </div>
            <div className={`menu ${activeContent === "Setting" ? "active" : ""}`} onClick={() => setActiveContent("Setting")}>
              <SettingIcon className="icon" isActive={activeContent === "Setting"} />
              <p>Setting</p>
            </div>
          </div>
        </aside>
        <main className="content">{renderContent()}</main>
      </section>
    </div>
  );
}

export default App;
