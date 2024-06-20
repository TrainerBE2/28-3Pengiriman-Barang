import React from "react";
import "../../App.css";
import notificationIcon from "../../assets/images/Notification-btn.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { EmailIcon, InstagramIcon, LocationIcon, TelephoneIcon } from "../Icons/icon";

function Help() {
  return (
    <div className="help">
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
              <h4 className="ms-1">Help & Support</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container mb-3">
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
                  <div className="row mb-3">
                    <div className="col">
                      <EmailIcon />
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
            <div className="col-3">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body text-center rounded-5">
                  <div className="mb-3">
                    <p className="card-title fs-5">Telephone</p>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <TelephoneIcon />
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <h6>08123456789</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body text-center rounded-5">
                  <div className="mb-3">
                    <p className="card-title fs-5">Location</p>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <LocationIcon />
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <h6>Semarang, Jawa Tengah</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body text-center rounded-5">
                  <div className="mb-3">
                    <p className="card-title fs-5">Social Media</p>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <InstagramIcon />
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <h6>@delivefree.id</h6>
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
