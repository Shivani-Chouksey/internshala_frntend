"use client";

import {
    asyncForgetPassword,
  asyncOtpPassword,
  asyncSigninemploye,
  asyncSignoutemploye,
  fetchCurrentemploye,
} from "@/store/Actions/employeAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function employeLayout({ children }) {
  const [employeData, setemployeData] = useState({});
  const [signData, setsignData] = useState({});
  const [formChange, setFormChange] = useState("true");
  // const [onchangeOtpData, setOnchangeOtpData] = useState({});
  const [onchangeOTPData, setOnchangeOTPData] = useState({});

  const [onchangeEmailData, setOnchangeEmailData] = useState({});

  const dispatch = useDispatch();

  const { errors } = useSelector((state) => state.employeReducer);

  // const fetchedemploye = useSelector(state => state.employeReducer.employe);
  const { employe, isAuthenticated } = useSelector(
    (state) => state.employeReducer
  );
  // useEffect(() => {
  //   dispatch(fetchCurrentemploye());
  // }, []);
  console.log(isAuthenticated);

  const router = useRouter();
  useEffect(() => {
    const getemploye = async () => {
      try {
        dispatch(fetchCurrentemploye());
      } catch (error) {
        console.error("Error fetching employe data:", error);
      }
    };

    getemploye();
  }, []);

  useEffect(() => {
    if (employe) {
      setemployeData(employe);
    }
  }, [employe]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/employe/auth");
    } else {
      router.push("/employe");
    }
  }, [isAuthenticated]);

  if(!isAuthenticated){
    router.push("/employe");

  }
  const logoutHandler = () => {
    dispatch(asyncSignoutemploye());
    window.location.reload();
  };

  const changeForm = () => {
    setFormChange("false");
  };

  const onchangeSigninHandler = (e) => {
    setsignData({ ...signData, [e.target.name]: e.target.value });
    console.log(signData);
  };

  const signinHandler = async (event) => {
    event.preventDefault();
    await dispatch(asyncSigninemploye(signData));
    window.location.reload();
  };

  //otp

  // const changOtpHandler = (e) => {
  //   setOnchangeData({ [e.target.name]: e.target.value });
  // };

  //mail input data
  const emailOnChange = (e) => {
    setOnchangeEmailData({ [e.target.name]: e.target.value });
  };

  const sendMailHandler = async (e) => {
    e.preventDefault();
    await dispatch(asyncForgetPassword(onchangeEmailData));
    setFormChange(" ");

    if (errors.length === 0) {
      // router.push("/employe/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  //otp handler

  const otpOnChange = (e) => {
    setOnchangeOTPData({...onchangeOTPData, [e.target.name]: e.target.value });
    console.log(onchangeOTPData)
  };


  const otpHandler = async (e) => {
    e.preventDefault();
    await dispatch(asyncOtpPassword(onchangeOTPData));

  

    if (errors.length === 1) {
      router.push("/employe");
      window.re
      
    } else {
      // toast.error(JSON.stringify(errors));
      return;
    }

    const modal = document.getElementById("yourModalId"); // Replace with your actual modal ID
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.hide();
    }
  };

  // console.log("employe",employeData)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 sticky-top shadow-sm p-2 mb-3 bg-body-tertiary rounded">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" href="/">
            <img
              style={{ width: "100px" }}
              src="https://internshala.com//static/images/internshala_og_image.jpg"
              alt=""
            />
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
          <div
            className="collapse navbar-collapse ms-md-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href={isAuthenticated ? "/employe/auth" : "/employe "}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Internship
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jobs
                </a>
              </li> */}

              {isAuthenticated ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {employeData.firstName}
                    </a>
                    <ul className="dropdown-menu px-3">
                      <li>
                        <p className="fw-bold m-0">
                          {`${employeData.firstName}  ${employeData.lastName}`}
                        </p>

                        <p className="fw-semibold m-0">{employeData.email}</p>
                      </li>
                      <hr className="dropdown-divider" />

                      <li>
                        <Link
                          className="dropdown-item fw-bolder text-primary"
                          href="/employe/auth/profile"
                        >
                          Now more.......
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                    <Link
                      className="dropdown-item fw-bolder "
                      href="/employe/auth/application"
                    >
                      My Application
                    </Link>
                  </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit Profile
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item mx-2">
                    <Link
                      className="btn btn-warning "
                      href="/employe/auth/profile"
                    >
                      Profile
                    </Link>
                  </li>
                 

                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={logoutHandler}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item ms-3">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>
                  {/* <button className="btn btn-danger" onClick={logoutHandler}>
                    Signin
                  </button> */}
                  {/* <a className="nav-link btn btn-danger" onClick={logoutHandler}>
             </a> */}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {children}

      {/* model */}
      <div
        className="modal fade p-4"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog p-5">
          {formChange == "true" ? (
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  employe
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form className="p-3" onSubmit={signinHandler}>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      name="email"
                      onChange={onchangeSigninHandler}
                      value={signData.email}
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
                      Enter Password
                    </label>
                    <input
                      name="password"
                      onChange={onchangeSigninHandler}
                      value={signData.password}
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="password"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary ">
                  Signin
                </button>
              </form>
              {/* <Link
              className="text-end text-decoration-none text-primary p-4"
              href="/employe/forget"
            >
              Forgot password ?
            </Link> */}
              <div className="my-2 mx-auto ">
                <button onClick={changeForm} className="btn-sm btn btn-warning">
                  {" "}
                  Forgot password ?
                </button>
              </div>
            </div>
          ) : formChange == "false" ? (
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Enter Your Email
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form className="p-3" onSubmit={sendMailHandler}>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      name="email"
                      onChange={emailOnChange}
                      value={onchangeEmailData.email}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success  mx-auto">
                  Update
                </button>
              </form>
            </div>
          ) :  (
            <div className="modal-content"  id="yourModalId">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Enter OTP
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                 
                ></button>
              </div>
              <form className="p-3" onSubmit={otpHandler}>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Enter Otp :
                    </label>
                    <input
                      name="otp"
                      onChange={otpOnChange}
                      value={onchangeOTPData.otp}
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter OTP"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Enter Email :
                    </label>
                    <input
                      name="email"
                      onChange={otpOnChange}
                      value={onchangeOTPData.email}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Enter New Password :
                    </label>
                    <input
                      name="password"
                      onChange={otpOnChange}
                      value={onchangeOTPData.password}
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="*********"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success  mx-auto">
                  Update
                </button>
              </form>
            </div>
          )}
          {/* <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                employe
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="p-3" onSubmit={signinHandler}>
              <div className="row mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={onchangeSigninHandler}
                    value={signData.email}
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
                    Enter Password
                  </label>
                  <input
                    name="password"
                    onChange={onchangeSigninHandler}
                    value={signData.password}
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="password"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary ">
                Signin
              </button>
            </form>
            <Link
              className="text-end text-decoration-none text-primary p-4"
              href="/employe/forget"
            >
              Forgot password ?
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
