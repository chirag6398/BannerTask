import React from "react";
import Button from "react-bootstrap/Button";
import "./banner.css";

export default function Banner() {
  return (
    <div>
      <div className="banner__background">
        <div className="banner_content">
          <div className="banner_tagline">
            <p className="banner_smallTagLine">
              Serious Business,Serious Finance
            </p>
          </div>
          <div className="banner_tagline">
            <span className="banner_heading">Simplifying</span>
          </div>
          <div className="banner_tagline">
            <span className="banner_heading">Investing For</span>
          </div>
          <div className="banner_tagline banner_row">
            <div>
              <span className="banner_heading">You</span>
            </div>
            <div>
              <p className="banner__subHeading">
                Timely reach and analyse.Intutive <br />
                yet powerful business tool
              </p>
            </div>
          </div>
          <div>
            <Button variant="danger" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="banner_squareCloud1"></div>
        <div className="banner_squareCloud2"></div>
        <div className="banner_cloud banner_cloud1"></div>
        <div className="banner_cloud banner_cloud2"></div>
        <div className="banner_cloud banner_cloud3"></div>
        <div className="banner_cloud banner_cloud4"></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud5"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud6"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud7"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud8"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud9"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud10"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud11"
        ></div>
        <div
          style={{ opacity: 1 }}
          className="banner_cloud banner_cloud12"
        ></div>
        <div className=" banner__largeClouds"></div>
      </div>
    </div>
  );
}
