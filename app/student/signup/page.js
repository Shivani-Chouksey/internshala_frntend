"use client";
import { asyncSigninStudent, asyncSignupStudent } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({});
  const [signData, setsignData] = useState({});

  const onchangeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };

  const signupHandler = (event) => {
    event.preventDefault();
    dispatch(asyncSignupStudent(formdata));
  };
 

  const onchangeSigninHandler = (e) => {
    setsignData({ ...signData, [e.target.name]: e.target.value });
    console.log(signData);
  };

  const signinHandler = (event) => {
    event.preventDefault();
    dispatch(asyncSigninStudent(signData));
  };

  return (
    <>
      <div className=" ">
        <div
          className="container mx-auto   my-auto "
          style={{ width: "520px" }}
        >
          <div className="">
            <h1>Sign-up and apply for free</h1>
            <img
              style={{ marginLeft: "220px" }}
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt=""
            />
          </div>

          <p className="fs-4 fw-bolder">
            1,50,000+ companies hiring on Internshala
          </p>
          <div className="shadow p-5  mb-5 bg-body-tertiary rounded">
            <form onSubmit={signupHandler}>
              <div className="row mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="email"
                    onChange={onchangeHandler}
                    value={formdata.email}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Enter Password<span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="password"
                    onChange={onchangeHandler}
                    value={formdata.password}
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="form-label"
                  >
                    First Name<span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={onchangeHandler}
                    value={formdata.firstName}
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    id="exampleFormControlInput3"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="exampleFormControlInput4"
                    className="form-label"
                  >
                    Last Name<span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="lastName"
                    onChange={onchangeHandler}
                    value={formdata.lastName}
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    id="exampleFormControlInput4"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="exampleFormControlInput5"
                    className="form-label"
                  >
                    City Name<span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={onchangeHandler}
                    value={formdata.city}
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder="city"
                    aria-label="city"
                    id="exampleFormControlInput5"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="exampleFormControlInput5"
                    className="form-label"
                  >
                    Contact<span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="contact"
                    onChange={onchangeHandler}
                    value={formdata.contact}
                    type="number"
                    className="form-control"
                    placeholder="contact"
                    aria-label="contact"
                    id="exampleFormControlInput5"
                  />
                </div>
              </div>
              <div className="d-grid gap-2 my-5">
                <p className="m-0">
                  By signing up, you agree to our{" "}
                  <span className="text-primary">Terms and Conditions</span>.
                </p>
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </div>
            </form>

            <p className="text-center fw-bolder">
              Already Registerd ! ?
              {/* <a
                className="text-decoraton-none text-primary mx-2"
                href="/signin"
              >
                Signin
              </a> */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary ms-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Signin
              </button>
            </p>
          </div>
        </div>
        {/* <!-- Modal --> */}
       
      </div>
    </>
  );
};

export default page;
