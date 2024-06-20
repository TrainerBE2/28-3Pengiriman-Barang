import React from "react";
import "../../App.css";
import notificationIcon from "../../assets/images/Notification-btn.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Shipment() {
  return (
    <div className="shipment">
      <div className="container mb-5">
        <div className="row text-end">
          <div className="col">
            <a href="#">
              <img src={notificationIcon} alt="" className="me-3" />
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
              <h4 className="ms-1">Shipment</h4>
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
                    <p className="card-title ms-3 mt-2 fs-5">New Orders</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg ps-4 pe-4">
                          70
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-success btn-sm">
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
                    <p className="card-title ms-3 mt-2 fs-5">Pending Orders</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg ps-4 pe-4">
                          123
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-danger btn-sm">
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
                    <p className="card-title ms-3 mt-2 fs-5">Delivered Orders</p>
                  </div>
                  <div className="container-fluid">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <a href="#" className="btn btn-secondary btn-lg ps-4 pe-4">
                          150
                        </a>
                      </div>
                      <div className="col mt-2">
                        <a href="#" className="card-link text-decoration-none text-dark me-2">
                          Impression
                        </a>
                        <a href="#" className="btn btn-success btn-sm">
                          + 20%
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
                <div className="row d-flex align-items-center">
                  <div className="col">
                    <p className="card-title fs-5 mt-1">Shipment</p>
                  </div>
                  <div className="col-3">
                    <input type="text" className="form-control border border-secondary" id="shipment" aria-describedby="search" name="search" placeholder="Search" />
                  </div>
                  <div className="col-1">
                    <a href="#" className="btn btn-light btn-outline-secondary">
                      Cari
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table" htmlFor="shipment">
                <thead>
                  <tr>
                    <th scope="col">Receipts</th>
                    <th scope="col">Date</th>
                    <th scope="col">Recipient's Name</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DLF774536BKS</th>
                    <td>2024-06-01</td>
                    <td>Hariyono</td>
                    <td>Bekasi</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shipment;
