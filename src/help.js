import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Help() {
  return (
    <div className="help">
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
              <h4 className="ms-1">Help & Support</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="ms-1">Please contact us below if you have any problems.</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body text-center rounded-5">
                  <div className="mb-3">
                    <p className="card-title fs-5">Email</p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src="image/envelope.png" />
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <h6>delivefree@email.com</h6>
                      </div>
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

export default Help;
