// "use client";

// import { asynCurrentStudent } from "@/store/Actions/studentActions";
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

// const metadata = {
//   title: "Home page",
//   description: "Generated by create next app",
// };

// const page = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(asynCurrentStudent());
//   }, []);

//   return (
//     <div>
//       <a href="/student">Student</a>
//     </div>
//   );
// };

// export default page;
"use client";
import { fetchCurrentStudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

const Page = () => {
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Internships
                  </a>
                  <ul className="dropdown-menu px-3">
                    <li>
                      <p className="fw-bold m-0"></p>

                      <p className="fw-semibold m-0"></p>
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Jobs
                  </a>
                  <ul className="dropdown-menu px-3">
                    <li>
                      <p className="fw-bold m-0"></p>

                      <p className="fw-semibold m-0"></p>
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses{" "}
                    <span className="bg-warning text-white px-1  rounded">
                      OFFER
                    </span>
                  </a>
                  <ul className="dropdown-menu px-3">
                    <li>
                      <p className="fw-bold m-0"></p>

                      <p className="fw-semibold m-0"></p>
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
              </>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item mx-2">
                  <Link className="btn btn-primary " href="/student/signup">
                    Register
                  </Link>
                </li>
              </>

              <li className="nav-item ms-3">
                <Link
                  href="/employe"
                  className=" text-decoration-none border-start border-dark border-2 text-dark ps-4 fs-6 fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Hire Talent
                </Link>
                {/* <button className="btn btn-danger" onClick={logoutHandler}>
                    Signin
                  </button> */}
                {/* <a className="nav-link btn btn-danger" onClick={logoutHandler}>
             </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 className="text-center fw-bold mt-5" style={{fontSize:"3.2vw"}}>
          Make your dream career a reality
        </h1>

        <h3 className="text-center fw-bold mt-2">Trending on Internshala 🔥</h3>
        <a href="/student">Student</a>
        <a href="/employe">Employe</a>
      </div>
    </>
  );
};

export default Page;