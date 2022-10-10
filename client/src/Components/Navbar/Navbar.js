import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <nav>
      <div className="custom-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="navbar-btns">
                <Link to="/">
                  <Button variant="contained">Home</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="navbar-btns">
                <Link to="/chat">
                  <Button variant="contained">Chat</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
