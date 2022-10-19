import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../styles/login-register.css";

const SignupSchema = () =>
  Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password can only contain minimum eight characters, at least one letter and one number."
      ),
  });

const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}>
                {({ errors, touched }) => (
                  <Form className="form">
                    <div className="form__group">
                      <Field name="email" type="email" placeholder="Email" />
                      {errors.email && touched.email && (
                        <div className="error__text">{errors.email}</div>
                      )}
                    </div>
                    <div className="form__group">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      {errors.password && touched.password && (
                        <div className="error__text">{errors.password}</div>
                      )}
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <Link className="link__register" to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
