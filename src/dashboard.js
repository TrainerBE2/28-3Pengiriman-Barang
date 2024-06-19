import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container mb-5">
        <div className="row ">
          <div className="col-9">
            <a href="#" className="btn btn-light btn-lg rounded-4 pt-3 pb-3">
              &lt;
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <img src="image/Notification-btn.png" alt="" className="me-3" />
            </a>
            <a href="#" className="btn btn-light btn-lg pt-3 pb-3">
              Profile Name
            </a>
          </div>
        </div>
      </div>
      <section id="home">
        <div className="container mb-3">
          <div className="row">
            <div className="col">
              <h4 className="ms-1">Dashboard</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body rounded-5">
                  <div className="d-flex flex-row mb-3">
                    <img src="image/Customer-icon.png" alt="customer" className="ms-3" />
                    <p className="card-title ms-3 mt-2 fs-5">Total Customer</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg ps-4 pe-4 ">
                          748
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-success btn-sm ">
                          + 20%
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body rounded-5">
                  <div className="d-flex flex-row mb-3">
                    <img src="image/Delivery-icon.png" alt="customer" className="ms-3" />
                    <p className="card-title ms-3 mt-2 fs-5">Total Shipment</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg pe-4 ps-4">
                          213
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-danger btn-sm ">
                          - 7%
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body rounded-5">
                  <div className="d-flex flex-row mb-3">
                    <img src="image/Delivery-icon.png" alt="customer" className="ms-3" />
                    <p className="card-title ms-3 mt-2 fs-5">Total Order</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg ps-4 pe-4">
                          748
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-success btn-sm">
                          + 17%
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="data">
        <div className="container mb-5">
          <div className="card border-0">
            <div className="card-header tabel">
              <div className="container">
                <div className="row">
                  <div className="col mt-1">
                    <p className="card-title fs-5">Transaction History</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID Transaction</th>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                  <tr>
                    <th scope="row">TXN001</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>08123456789</td>
                    <td>BCA</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex flex-row-reverse">
                <a href="#" className="btn btn-primary ps-4 pe-4">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
