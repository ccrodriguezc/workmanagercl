import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import i18n from "locales/i18n";
import { AvForm, AvGroup, AvField } from "availity-reactstrap-validation";
import useLogin from "hooks/useLogin";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const { isLoginLoading, login, isLogged } = useLogin();

  useEffect(() => {
    if (isLogged) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [isLogged, history]);

  const [userLogin, setUserLogin] = useState({
    userName: "",
    password: "",
    stillActive: false,
  });

  const handleOnSubmit = async (e) => {
    login(userLogin.userName, userLogin.password);
  };

  return (
    <AvForm onSubmit={handleOnSubmit}>
      <Row form>
        <Col md={12}>
          <AvGroup>
            <AvField
              onChange={(e) => {
                setUserLogin({ ...userLogin, userName: e.target.value });
              }}
              type="texto"
              name="userName"
              id="userName"
              placeholder={i18n.t("login.placeholder1")}
              validate={{
                pattern: {
                  value: "/^([A-Za-z0-9_+@]+)$/",
                  errorMessage: `${i18n.t("login.feedBack")}`,
                },
                required: {
                  value: true,
                  errorMessage: `${i18n.t("form.field46")}`,
                },
                minLength: {
                  value: 5,
                  errorMessage: `${i18n.t(
                    "fieldValidateLengthBetween"
                  )} 5 ${i18n.t("and")} 100 ${i18n.t("characters")}`,
                },
                maxLength: {
                  value: 100,
                  errorMessage: `${i18n.t(
                    "fieldValidateLengthBetween"
                  )} 5 ${i18n.t("and")} 100 ${i18n.t("characters")}`,
                },
              }}
              value={userLogin.userName}
            />
          </AvGroup>
        </Col>
        <Col md={12}>
          <AvGroup>
            <AvField
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
              type="password"
              name="password"
              id="password"
              placeholder={i18n.t("login.placeholder2")}
              validate={{
                required: {
                  value: true,
                  errorMessage: `${i18n.t("login.feedBack2")}`,
                },
              }}
              value={userLogin.password}
            />
          </AvGroup>
        </Col>
      </Row>

      <div className="modal-footer clearfix">
        <div className="float-left">
          <div className="float-right">
            <Button
              type="submit"
              color="cyan"
              size="lg"
              disabled={isLoginLoading}
            >
              {i18n.t("login.button")}
            </Button>
          </div>
        </div>
      </div>
    </AvForm>
  );
};

export default LoginForm;
