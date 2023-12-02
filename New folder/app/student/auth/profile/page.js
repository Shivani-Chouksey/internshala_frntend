"use client";
import {
    asyncResetPassword,
  asyncSigninStudent,
  asyncSignupStudent,
  asyncUpdateAvatar,
  asyncUpdateStudent,
} from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({});
  const [passwordData, setPasswordData] = useState("");
//   const [signData, setsignData] = useState({});
const { student} = useSelector( (state) => state.studentReducer );
//   console.log(student && student.avatar.url)
  const onchangeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    dispatch(asyncUpdateStudent(formdata));
  };


  const updateAvatarHandler=(e)=>{
    e.preventDefault();
    const formdata=new FormData(e.target);
    formdata.set("avatar",e.target.avatar.files[0]);
    dispatch(asyncUpdateAvatar(formdata));

    // for(const[key,value] of formdata){
    //     console.log(`${key}:${value}\n`)
    // }

  }
//   const onchangeSigninHandler = (e) => {
//     setsignData({ ...signData, [e.target.name]: e.target.value });
//     console.log(signData);
//   };

//   const signinHandler = (event) => {
//     event.preventDefault();
//     dispatch(asyncSigninStudent(signData));
//   };
const onchangePassWordHandler=(e)=>{
    setPasswordData({[e.target.name]: e.target.value})
console.log(passwordData)
}
const resetPasswordHandler=(e)=>{
    e.preventDefault();
    dispatch(asyncResetPassword(passwordData));


}

  return (
    <>
      <div className=" ">
        <div
          className="container mx-auto   my-auto "
          style={{ width: "520px" }}
        >
          <div className="">
            <h1>Edit Your Profile Details</h1>
            <img
              style={{ marginLeft: "220px" }}
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt=""
            />
          </div>

          <div className="shadow pb-5 pt-2 px-5   mb-5 bg-body-tertiary rounded">

          <div className="rounded-circle mx-auto my-3" style={{width:"100px",height:"100px",overflow:"hidden"}}>
            <img  src={student && student.avatar.url} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
          </div>
          <form action="" onSubmit={updateAvatarHandler} encType="multipart/form-data" >
            <input type="file" name="avatar" />
            <button> Submit</button>
          </form>
            <form onSubmit={updateHandler}>
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
                {/* <div className="mb-2">
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
                </div> */}
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
                {/* <p className="m-0">
                  By signing up, you agree to our{" "}
                  <span className="text-primary">Terms and Conditions</span>.
                </p> */}
                <button className="btn btn-success" type="submit">
                  Update
                </button>
              </div>
            </form>
            <button className="btn btn-primary"   data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Reset Password</button>
          </div>
        </div>
        {/* <!-- Modal --> */}
      </div>
      <div
        className="modal fade p-4"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog p-5">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="p-3" onSubmit={resetPasswordHandler}>
              <div className="row mb-3">
              
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Enter Password
                  </label>
                  <input
                    name="password"
                    onChange={onchangePassWordHandler}
                    value={passwordData.password}
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
            <a
              className="text-end text-decoration-none text-primary p-4"
              href=""
            >
              Forgot password ?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
