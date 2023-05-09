import React from "react";
import Button from "react-bootstrap/Button";
import cloudImg from "../asset/images/lightShade.png";
import whiteImg from "../asset/images/white.png";

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
        <div className="cloud"></div>
        <div className="cloud_two"></div>
        <div className="cloud_three"></div>
        <div className="cloud_four"></div>
        <div>
          <img src={cloudImg} className="banner_bottomImg" alt="..." />
        </div>
        <div>
          <img
            src={whiteImg}
            style={{ height: "130px" }}
            className="banner_bottomImg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
