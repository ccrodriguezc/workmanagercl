import React, { Fragment } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import i18n from "../../../assets/locales/i18n";
//import LoginForm from "components/organism/LoginForm";
// //import LoginError from "components/molecules/Messages/Error/LoginError";
// //import useLogin from "hooks/useLogin";
import ChangePass1 from "../../../assets/images/changepass1.png";
import ChangePass2 from "../../../assets/images/changepass2.png";
import ChangePass3 from "../../../assets/images/changepass3.png";

const Login = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <Fragment>
      <div className="h-100">
        <Row className="h-100 no-gutters">
          <Col md="4" className="d-none d-lg-block">
            <div className="slider-light">
              <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + ChangePass1 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>{i18n.t("dashboardheading")}</h3>
                    <p>{i18n.t("changePassword.p1")}</p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + ChangePass2 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>{i18n.t("changePassword.t2")}</h3>
                    <p>{i18n.t("changePassword.p2")}</p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + ChangePass3 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>{i18n.t("changePassword.t3")}</h3>
                    <p>{i18n.t("changePassword.p3")}</p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col md="8" sm="12">
            <div className="app-logo" />
            <br></br>
            <br></br>
            <h4>
              <div>{i18n.t("welcome")}</div>
            </h4>
            <div>{/* <LoginForm /> */}</div>
            <br />
            <div className="text-center opacity-8 mt-3">
              {i18n.t("ed.advice")}
            </div>
            <a
              href="https://www.estrategiasdocumentales.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lg btn btn-link  d-flex justify-content-center align-items-center"
            >
              {i18n.t("ed.link")}
            </a>
            <br />
            <br />
            <br />
            <div className="text-center opacity-8 mt-3">
              {i18n.t("copyright")}
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Login;
