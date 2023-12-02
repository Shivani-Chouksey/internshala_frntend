"use client";
import { asyncApplyIntern, asyncApplyJob, getallIntern, getalljobs } from "@/store/Actions/studentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [intern, setIntern] = useState([]);
  const [alljob, setAllJob] = useState([]);

  useEffect(() => {
    const getintern = async () => {
      try {
        const inter = await dispatch(getallIntern());
        const job = await dispatch(getalljobs());
        setIntern(inter);
        setAllJob(job);
      } catch (error) {
        console.log(error);
      }
    };
    getintern();
  }, []);
  const { student } = useSelector((state) => state.studentReducer);
  console.log(intern);
  console.log(alljob);
  console.log(student && student.firstName);

  const applyJobHandler=(id)=>{
dispatch(asyncApplyJob(id))
  }

  const applyinternHandler=(id)=>{
dispatch(asyncApplyIntern(id))
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center mx-auto mt-5 mb-3">
          Internships / jobs Available for{" "}
          <strong>{student && student.firstName}</strong>
        </h1>
        <img
              style={{ marginLeft: "730px" }}
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt=""
            />
            <hr />

        <div className="row mt-5">
          <div className="col-6 px-5">
            <h3 className="text-center mb-4"><i class="bi bi-person-workspace me-2 text-primary"></i>Jobs</h3>

            {alljob.jobs &&
              alljob.jobs.map((job, i) => {
                return (
                  <div key={i} className="shadow p-3 mb-3 bg-body-tertiary rounded">
                    <h6><strong>Job Profile : </strong>{job.tittle ?job.tittle:"Job Title"} </h6>
                    <div className="d-flex justify-content-between px-2">
                      <p>
                        <i className="bi bi-house"></i>
                        {job.jobtype}{" "}
                      </p>
                      <p>
                        {" "}
                        <strong>Opning :</strong> {job.openings}{" "}
                      </p>
                      <p className="btn btn-dark">
                        {" "}
                        <strong>applied student : </strong>{" "}
                        {job.students.length}
                      </p>
                    </div>

                    <p className="m-0">
                      {" "}
                      <strong>Duration : </strong> {job.preferences}
                    </p>

                    <p className="m-0">
                      {" "}
                      <strong>Perks : </strong> {job.perks}
                    </p>
                    <p className="m-0">
                      {" "}
                      <strong>Salary : </strong> {job.salary}
                    </p>
                    {/* <p className="m-0">
                      {" "}
                      <strong>Preferences : </strong> {job.preferences}
                    </p> */}
                    <p className="m-0">
                      {" "}
                      <strong>Job Description :</strong> {job.description}{" "}
                    </p>

                    {
                      !student && ! student.jobs.includes(job._id) ? <button onClick={()=>applyJobHandler(job._id)} className="btn btn-success my-2 mx-auto">
                       Apply
                     </button>: <button className="btn btn-success my-2 mx-auto">
                     Already Applied  
                    </button>
                      }
                   
                  </div>
                );
              })}
          </div>
          <div className="col-6">
            <h3 className="text-center mb-4"><i class="bi bi-laptop-fill me-2 text-primary "></i>Internship</h3>

            {intern.internship &&
              intern.internship.map((intern, i) => {
                return (
                  <div className="shadow p-3 mb-3 bg-body-tertiary rounded">
                    <h6><strong>Internship Profile : </strong>{intern.profile} </h6>
                    <div className="d-flex justify-content-between px-2">
                      <p>
                        <i className="bi bi-house"></i>
                        {intern.internshiptype}{" "}
                      </p>
                      <p>
                        {" "}
                        <strong>Opning :</strong> {intern.openings}{" "}
                      </p>
                      <p className="btn btn-dark">
                        {" "}
                        <strong>applied student : </strong>{" "}
                        {intern.students.length}
                      </p>
                    </div>

                    <p className="m-0">
                      {" "}
                      <strong>Duration : </strong> {intern.duration}
                    </p>
                    <p className="m-0">
                      {" "}
                      <strong>intern responsibility :</strong> {intern.responsibility}{" "}
                    </p>

                    {
                       ! student.internships.includes(intern._id) ? <button onClick={()=>applyinternHandler(intern._id)} className="btn btn-success my-2 mx-auto">
                       Apply
                     </button>: <button className="btn btn-success my-2 mx-auto">
                     Already Applied  
                    </button>
                      }
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
