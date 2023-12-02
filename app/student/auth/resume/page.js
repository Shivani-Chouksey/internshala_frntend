"use client";
import {
  asyncAddRducaton,
  asyncDeletEducaton,
  asyncEditEducaton,
} from "@/store/Actions/studentActions";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

const page = () => {
  const proposalRef = useRef();

  const { student } = useSelector((state) => state.studentReducer);

  const [edu, setEdu] = useState({});
  const [id, setId] = useState("");
  const [btn, setBtn] = useState("true");
  console.log(id);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
    console.log("onchange", edu);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(asyncAddRducaton(edu));
  };
  const editID = (id) => {
    setId(id);
    setBtn("false");
  };

  const editHandler = (e) => {
    e.preventDefault();

    dispatch(asyncEditEducaton(id, edu));
    setBtn("true");
  };
  const deleteHandler = (id) => {
    dispatch(asyncDeletEducaton(id));
  };
  console.log(student);
  return (
    <>
      <div className="container">
        <ReactToPrint
          trigger={() => {
            return (
              <button className="btn btn-light">
                <i class="bi bi-download"></i>
              </button>
            );
          }}
          content={() => proposalRef.current}
          documentTitle=""
          onPrintError={(er) => console.log(er)}
        />

      
      </div>
      <div className="container" ref={proposalRef}>
      <h1 className="text-center" >
          Resume
        </h1>
        <div className="border border-1">
          <div className="px-5 py-3 ">
            <h3>
              {student && student.fristName} {student && student.lastName}{" "}
            </h3>
            <p className="m-0">{student && student.email}</p>
            <p className="m-0">{student && student.contact}</p>
            <p className="m-0">{student && student.city} </p>
          </div>
          <div className="row border-top">
            <div className="col-3 px-5 py-3 ">
              <h4>Education</h4>
            </div>
            <div className="col-9">
              {student &&
                student.resume.education.map((edu, i) => {
                  return (
                    <div className="d-flex justify-content-between px-5 py-3 ">
                      <div>
                        <h5>{edu.title}</h5>
                        <p className="m-0">{edu.college}</p>
                        <p className="m-0">
                          {edu.stream}, Percentage/CGPA - {edu.performance}
                        </p>
                        <p className="m-0">
                          <strong>City</strong>
                          {edu.city}
                        </p>
                      </div>
                      ;
                      <div>
                        <button
                          className="btn btn-light me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => editID(edu.id)}
                        >
                          <i class="bi bi-pencil-square"></i> Edit
                        </button>
                        <button
                          className="btn btn-light"
                          onClick={() => deleteHandler(edu.id)}
                        >
                          <i class="bi bi-trash3"></i> Delate
                        </button>
                      </div>
                    </div>
                  );
                })}
              <button
                className="btn btn-outline-primary mt-3 btn-sm ms-5 "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i class="bi bi-plus-lg"></i>Add Education
              </button>
            </div>
          </div>
        </div>
</div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog p-3">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Graduation details/ Post graduation details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label htmlForfor="exampleInputEmail1" class="form-label">
                    Add Title of graducation
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="title"
                    value={edu.title}
                    onChange={onChangeHandler}
                  />
                </div>
                <div class="mb-3">
                  <label htmlForfor="exampleInputPassword1" class="form-label">
                    College
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={edu.college}
                    onChange={onChangeHandler}
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="row">
                  <div class="col-md-6">
                    <label htmlForfor="inputEmail4" class="form-label">
                      Start Year
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputEmail4"
                      name="from"
                      value={edu.from}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div class="col-md-6">
                    <label htmlForfor="inputPassword4" class="form-label">
                      End Year
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                      name="to"
                      value={edu.to}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col-md-6">
                    <label htmlForfor="inputEmail4" class="form-label">
                      Degree
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      name="degree"
                      value={edu.degree}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div class="col-md-6">
                    <label htmlForfor="inputPassword4" class="form-label">
                      Stream
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      name="stream"
                      value={edu.stream}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="p-4 bg-light">
                  <p>
                    Example: If your degree is B.Sc in Chemistry, then select
                    Bachelor of Science (B.Sc) in degree and Chemistry in
                    streams. If you can't find your degree, check for typos or
                    different ways of writing your degree or choose from the
                    closest available. Write to support@internshala.com if you
                    are pursuing a degree not available in the list.
                  </p>
                </div>
                <div className="row d-flex">
                  <div class="mb-3 ">
                    <label htmlForfor="inputPassword" class="form-label">
                      Performance scale
                    </label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={onChangeHandler}
                    >
                      <option value="percentage">Percentage</option>
                      <option value="CGPA">CGPA</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label htmlForfor="inputPassword" class="form-label">
                      Performance
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      name="performance"
                      value={edu.performance}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                {btn == " true" ? (
                  <button
                    button
                    type="submit"
                    class="btn btn-primary"
                    onClick={onSubmitHandler}
                  >
                    save
                  </button>
                ) : btn == "false" ? (
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={editHandler}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    button
                    type="submit"
                    class="btn btn-primary"
                    onClick={onSubmitHandler}
                  >
                    save
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
