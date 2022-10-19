import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../styles/login-register.css";

const SignupSchema = () =>
  Yup.object().shape({
    fullname: Yup.string()
      .min(3)
      .max(50)
      .matches(/^[aA-zZ\s]+$/, "Name can only contain Latin letters.")
      .required(),
    age: Yup.number().min(1).max(99).typeError().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password can only contain minimum eight characters, at least one letter and one number."
      ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

const Register = () => {
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <Formik
                initialValues={{
                  fullname: "",
                  age: "",
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}>
                {({ errors, touched }) => (
                  <Form className="form">
                    <div className="form__group">
                      <Field
                        name="fullname"
                        type="text"
                        placeholder="Full name"
                      />
                      {errors.fullname && touched.fullname && (
                        <div className="error__text">{errors.fullname}</div>
                      )}
                    </div>
                    <div className="form__group">
                      <Field name="age" type="text" placeholder="Age" />
                      {errors.age && touched.age && (
                        <div className="error__text">{errors.age}</div>
                      )}
                    </div>
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
                    <div className="form__group">
                      <Field
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm password"
                      />
                      {errors.passwordConfirmation &&
                        touched.passwordConfirmation && (
                          <div className="error__text">
                            {errors.passwordConfirmation}
                          </div>
                        )}
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <Link className="link__register" to="/login">
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
