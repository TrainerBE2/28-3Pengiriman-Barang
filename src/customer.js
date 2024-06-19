import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Customer() {
  return (
    <div className="customer">
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
              <h4 className="ms-1">Customer</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container mb-5">
          <div className="card border-0">
            <div className="card-header tabel">
              <div className="container">
                <div className="d-flex align-items-center">
                  <div>
                    <a href="#" className="card-title fs-5 text-decoration-none">
                      Customer
                    </a>
                  </div>
                  <div className="ms-auto me-3">
                    <input type="text" className="form-control border border-secondary" id="transaction" aria-describedby="search" name="search" placeholder="Search" />
                  </div>
                  <div>
                    <a href="#" className="btn btn-light btn-outline-secondary">
                      Cari
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table" htmlFor="transaction">
                <thead>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Orders</th>
                    <th scope="col">Registered</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-success">Active</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-success">Active</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-success">Active</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-success">Active</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>{" "}
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-success">Active</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
                    <td>
                      <a href="#" className="btn btn-primary btn-sm pe-3 ps-3">
                        Edit
                      </a>
                    </td>
                  </tr>{" "}
                  <tr>
                    <th scope="row">Hariyono</th>
                    <td>Jakarta Selatan</td>
                    <td>100</td>
                    <td>2020-06-01</td>
                    <td className="text-danger">Off</td>
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

export default Customer;
