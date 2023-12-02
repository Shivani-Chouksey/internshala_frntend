"use client";
import {
  asyncCreatejobEmploye,
  asyncCreateinternEmploye,
} from "@/store/Actions/employeAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function page() {
  const [formdata, setFormdata] = useState({});
  const [internData, setInternData] = useState({});

  const dispatch = useDispatch();
  const onchangeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const onchangeinternHandler = (e) => {
    setInternData({ ...internData, [e.target.name]: e.target.value });
    console.log(internData);
  };

  const signupHandler = (event) => {
    event.preventDefault();
    console.log(formdata);
    dispatch(asyncCreatejobEmploye(formdata));
  };

  const internHandler = (event) => {
    event.preventDefault();
    console.log(internData);
    dispatch(asyncCreateinternEmploye(internData));
    setInternData({})
  };
  return (
    <div className="container">
      <h1 className="text-center ">
        Welcome to <strong> Employe</strong> Login
      </h1>

      <div className="mx-auto col-8 my-4 ">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Create Job
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Create Internship
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active shadow-lg p-5 mb-5 bg-body-tertiary rounded"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <form onSubmit={signupHandler}>
              <div className="row mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job Title <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="title"
                    onChange={onchangeHandler}
                    value={formdata.title}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="React Developer"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Skill
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="skill"
                    onChange={onchangeHandler}
                    value={formdata.skill}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="React.js,Next.js"
                  />
                </div>
              </div>

              {/* <div className="row mb-2">
                      <div className="col">
                        <label
                          htmlFor="exampleFormControlInput3"
                          className="form-label"
                        >
                         Job Type
                          <span className="text-danger fw-bold">*</span>
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
                          Last Name
                          <span className="text-danger fw-bold">*</span>
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
                    </div> */}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Job Type
                <span className="text-danger fw-bold">*</span>
              </label>
              <div className="d-flex gap-3 mb-2">
                <div class="form-check ">
                  {/* <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                       Job Type
                          <span className="text-danger fw-bold">*</span>
                        </label> */}
                  <input
                    class="form-check-input"
                    type="radio"
                    name="jobtype"
                    value="Remote"
                    id="flexRadioDefault1"
                    onChange={onchangeHandler}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Remote
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="jobtype"
                    value="In office"
                    id="flexRadioDefault2"
                    onChange={onchangeHandler}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    In office
                  </label>
                </div>
              </div>
              <div className="row mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Number of Openings
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="openings"
                    onChange={onchangeHandler}
                    value={formdata.openings}
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="1......"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Job Description
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="description"
                    onChange={onchangeHandler}
                    value={formdata.description}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Enter 10 digit Number"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Salary Amount
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="salary"
                    onChange={onchangeHandler}
                    value={formdata.salary}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="7,00,000"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Perks
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="perks"
                    onChange={onchangeHandler}
                    value={formdata.perks}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Tea ,Coffee"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Assesments
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="assesments"
                    onChange={onchangeHandler}
                    value={formdata.assesments}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Assesments"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Preferences
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    name="preferences"
                    onChange={onchangeHandler}
                    value={formdata.preferences}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="preferences"
                  />
                </div>
              </div>

              <div className="d-grid gap-2 my-5">
                {/* <p className="m-0">
                        By signing up, you agree to our{" "}
                        <span className="text-primary">
                          Terms and Conditions
                        </span>
                        .
                      </p> */}
                <button className="btn btn-primary" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div
              class="tab-pane fade show active shadow-lg p-5 mb-5 bg-body-tertiary rounded"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <form onSubmit={internHandler}>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Job Title <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="profile"
                      onChange={onchangeinternHandler}
                      value={setInternData.profile}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="React Developer"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Skill
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="skill"
                      onChange={onchangeinternHandler}
                      value={setInternData.skill}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="React.js,Next.js"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="form-label"
                    >
                      From
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      onChange={onchangeinternHandler}
                      value={setInternData.from}
                      name="from"
                      type="date"
                      className="form-control"
                      placeholder="1/01/2023"
                      aria-label="First name"
                      id="exampleFormControlInput3"
                    />
                  </div>
                  <div className="col">
                    <label
                      htmlFor="exampleFormControlInput4"
                      className="form-label"
                    >
                      To
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="to"
                      onChange={onchangeinternHandler}
                      value={setInternData.to}
                      type="date"
                      className="form-control"
                      placeholder="11/5/2025"
                      aria-label="Last name"
                      id="exampleFormControlInput4"
                    />
                  </div>
                </div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Internship Type
                  <span className="text-danger fw-bold">*</span>
                </label>
                <div className="d-flex gap-3 mb-2">
                  <div class="form-check ">
                    {/* <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                       Job Type
                          <span className="text-danger fw-bold">*</span>
                        </label> */}
                    <input
                      class="form-check-input"
                      type="radio"
                      name="internshiptype"
                      value="Remote"
                      id="flexRadioDefault1"
                      onChange={onchangeinternHandler}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Remote
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="internshiptype"
                      value="In office"
                      id="flexRadioDefault2"
                      onChange={onchangeinternHandler}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      In office
                    </label>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Number of Openings
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="openings"
                      onChange={onchangeinternHandler}
                      value={setInternData.openings}
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="1......"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Duration
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="duration"
                      onChange={onchangeinternHandler}
                      value={setInternData.duration}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder=" 6 Months"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Salary Amount
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="salary"
                      onChange={onchangeinternHandler}
                      value={setInternData.salary}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="7,00,000"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Responsibility
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="responsibility"
                      onChange={onchangeinternHandler}
                      value={setInternData.responsibility}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Problem Solving"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Perks
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="perks"
                      onChange={onchangeinternHandler}
                      value={setInternData.perks}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Problem Solving"
                    />
                  </div>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Stipend
                    <span className="text-danger fw-bold">*</span>
                  </label>
                  <div className="d-flex gap-3 mb-2">
                    <div class="form-check ">
                      {/* <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                       Job Type
                          <span className="text-danger fw-bold">*</span>
                        </label> */}
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stipend"
                        value="Fixed"
                        id="flexRadioDefault1"
                        onChange={onchangeinternHandler}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Fixed
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stipend"
                        value="Negotiable"
                        id="flexRadioDefault2"
                        onChange={onchangeinternHandler}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Negotiable
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stipend"
                        value="Unpaid"
                        id="flexRadioDefault2"
                        onChange={onchangeinternHandler}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Unpaid
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stipend"
                        value=" Performance based"
                        id="flexRadioDefault2"
                        onChange={onchangeinternHandler}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Performance based
                      </label>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Assesments
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="assesments"
                      onChange={onchangeinternHandler}
                      value={setInternData.assesments}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Assesments"
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 my-5">
                  {/* <p className="m-0">
                        By signing up, you agree to our{" "}
                        <span className="text-primary">
                          Terms and Conditions
                        </span>
                        .
                      </p> */}
                  <button className="btn btn-primary" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
