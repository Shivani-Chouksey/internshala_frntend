"use client";
import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useSelector } from "react-redux";
function page() {
  const { student } = useSelector((state) => state.studentReducer);

  console.log("jobs", student && student.internships, student && student.jobs);
  // const data = [
  //   {
  //     name: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //     },
  //     address: '261 Erdman Ford',
  //     city: 'East Daphne',
  //     state: 'Kentucky',
  //   },
  //   {
  //     name: {
  //       firstName: 'Jane',
  //       lastName: 'Doe',
  //     },
  //     address: '769 Dominic Grove',
  //     city: 'Columbus',
  //     state: 'Ohio',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joe',
  //       lastName: 'Doe',
  //     },
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia',
  //   },
  //   {
  //     name: {
  //       firstName: 'Kevin',
  //       lastName: 'Vandy',
  //     },
  //     address: '722 Emie Stream',
  //     city: 'Lincoln',
  //     state: 'Nebraska',
  //   },
  //   {
  //     name: {
  //       firstName: 'Joshua',
  //       lastName: 'Rolluffs',
  //     },
  //     address: '32188 Larkin Turnpike',
  //     city: 'Charleston',
  //     state: 'South Carolina',
  //   },
  // ];

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: 'name.firstName', //access nested data with dot notation
  //       header: 'First Name',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'name.lastName',
  //       header: 'Last Name',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'address', //normal accessorKey
  //       header: 'Address',
  //       size: 200,
  //     },
  //     {
  //       accessorKey: 'city',
  //       header: 'City',
  //       size: 150,
  //     },
  //     {
  //       accessorKey: 'state',
  //       header: 'State',
  //       size: 150,
  //     },
  //   ],
  //   [],
  // );

  return (
    <div className="container p-5">
      <h3 className="text-center my-5">My Applications</h3>
      <div className="row">
        <div className="col-6">
          <h2 className="mb-3">Applied Internships</h2>
          {student &&
            student.internships.map((intern, i) => {
              return (
                <div className="card mb-3" key={i}>
                  <h5>
                    <strong>Profile : </strong>
                    {intern.profile}{" "}
                  </h5>
                  <div className="d-flex gap-5">
                    <p className="m-0">
                      <strong>Skill : </strong>
                      {intern.skill}{" "}
                    </p>
                    <p className="m-0">
                      <strong> Internshiptype : </strong>
                      {intern.internshiptype}{" "}
                    </p>
                  </div>
                  <p className="m-0">
                    <strong>Duration : </strong>
                    {intern.duration}{" "}
                  </p>
                  <p className="m-0">
                    <strong>Responsibility : </strong>
                    {intern.responsibility}{" "}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="col-6">
          <h2>Applied Jobs</h2>
          {student &&
            student.jobs.map((job, i) => {
              return (
                <div className="card mb-3" key={i}>
                <h5>
                  <strong>Profile : </strong>
                  {job.profile}{" "}
                </h5>
                <div className="d-flex gap-5">
                  <p className="m-0">
                    <strong>Skill : </strong>
                    {job.skill}{" "}
                  </p>
                  <p className="m-0">
                    <strong> jobshiptype : </strong>
                    {job.jobshiptype}{" "}
                  </p>
                </div>
                <p className="m-0">
                  <strong>Duration : </strong>
                  {job.duration}{" "}
                </p>
                <p className="m-0">
                  <strong>Responsibility : </strong>
                  {job.responsibility}{" "}
                </p>
              </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default page;
