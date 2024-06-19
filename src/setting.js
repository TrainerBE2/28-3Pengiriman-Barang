import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ProfileIcon } from "./components/icon/icon";
function Setting() {
  return (
    <div className="setting">
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
              <h4 className="ms-1">Settings</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container mb-3">
          <div className="row">
            <div className="col">
              <h6 className="ms-1">Manage your account settings and preferences.</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body text-center rounded-5">
                  <div className="row my-4">
                    <div className="col">
                      <ProfileIcon />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col mb-3">
                        <h6>Bruno Fernandes</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body rounded-5">
                  <div className="row">
                    <div className="col">
                      <form>
                        <div className="mb-3">
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="first-name" className="form-label">
                                First Name
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="text" className="form-control border border-dark" id="first-name" aria-describedby="first-name" placeholder="Bruno" />
                            </div>
                          </div>
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="last-name" className="form-label">
                                Last Name
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="text" className="form-control border border-dark" id="last-name" aria-describedby="last-name" placeholder="Fernandes" />
                            </div>
                          </div>
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="password" className="form-label">
                                Password
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="password" className="form-control border border-dark" id="password" aria-describedby="last-name" placeholder="Fernandes" />
                            </div>
                          </div>
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="birthday" className="form-label">
                                Date of Birth
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="date" className="form-control border border-dark" id="birthday" aria-describedby="last-name" />
                            </div>
                          </div>
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="email" className="form-label">
                                Email Address
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="email" className="form-control border border-dark" id="email" aria-describedby="email" placeholder="brunofernandes18@gmail.com" />
                            </div>
                          </div>
                          <div className="row align-items-end mb-3">
                            <div className="col-2">
                              <label for="telephone" className="form-label">
                                Telephone
                              </label>
                            </div>
                            <div className="col-10">
                              <input type="tel" className="form-control border border-dark" id="telephone" aria-describedby="telephone" placeholder="08123456789" />
                            </div>
                          </div>
                          <div className="row align-items-center mb-3">
                            <div className="col-2">
                              <label for="avatar" className="form-label">
                                Change Avatar
                              </label>
                            </div>
                            <div className="col-5">
                              <input type="file" className="form-control border border-dark" id="avatar" aria-describedby="telephone" placeholder="" />
                            </div>
                          </div>
                        </div>
                        <div className="row text-end">
                          <div className="col">
                            <button type="button" className="btn btn-success btn-sm px-3 py-2">
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Setting;
