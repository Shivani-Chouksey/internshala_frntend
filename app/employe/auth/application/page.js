"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { useDispatch, useSelector } from "react-redux";
import { readcreatedInter, readcreatedjobs } from "@/store/Actions/employeAction";

function page() {
  const dispatch = useDispatch();
  const [intern, setIntern] = useState([]);
  const [job, setJob] = useState([]);
  useEffect(() => {
    const getallIntern = async () => {
      try {
        const { internships } = await dispatch(readcreatedInter());
        const { jobs } = await dispatch(readcreatedjobs());
        setIntern(internships);
        setJob(jobs)
        console.log("all intern", internships);
      } catch (error) {
        console.log(error);
      }
    };
    getallIntern();
  }, []);
  console.log("effrhg", job);
  const employe = useSelector((state) => state.employeReducer);
  const data = [
    {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      address: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
    },
    {
      name: {
        firstName: "Jane",
        lastName: "Doe",
      },
      address: "769 Dominic Grove",
      city: "Columbus",
      state: "Ohio",
    },
    {
      name: {
        firstName: "Joe",
        lastName: "Doe",
      },
      address: "566 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      name: {
        firstName: "Kevin",
        lastName: "Vandy",
      },
      address: "722 Emie Stream",
      city: "Lincoln",
      state: "Nebraska",
    },
    {
      name: {
        firstName: "Joshua",
        lastName: "Rolluffs",
      },
      address: "32188 Larkin Turnpike",
      city: "Charleston",
      state: "South Carolina",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className="container p-5">
      <h3 className="text-center my-5">My Applications</h3>

      <h3 className="my-4">All Internships :</h3>
      {intern &&
        intern.map((inter, i) => {
          return (
            <div className="row card " key={i}>
              <h3>
                <strong>Profile : </strong> {inter.profile}{" "}
              </h3>
              <div className="d-flex gap-5">
                 <p className="m-0">
                  <strong>Duration : </strong> {inter.duration}{" "}
                </p>
                 <p className="m-0">
                  <strong>Number of Applied Students : </strong>{" "}
                  {inter.students.length}{" "}
                </p>
              </div>
              <div className="d-flex gap-5">
                 <p className="m-0">
                  <strong>From :</strong> {inter.from}{" "}
                </p>
                 <p className="m-0">
                  <strong>To : </strong> {inter.to}{" "}
                </p>
              </div>

               <p className="m-0">
                {" "}
                <strong>Internship type :</strong>
                {inter.internshiptype}{" "}
              </p>
              <p className="m-0">
                <strong>Skill :</strong>
                {inter.skill}{" "}
              </p>
            </div>
          );
          //     <MaterialReactTable
          //     columns={columns}
          //     data={data}
          //     enableColumnActions={false}
          //     enableColumnFilters={false}
          //     enablePagination={false}
          //     enableSorting={false}
          //     enableBottomToolbar={false}
          //     enableTopToolbar={false}
          //     muiTableBodyRowProps={{ hover: false }}
          //     muiTableProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //     muiTableHeadCellProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //     muiTableBodyCellProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //   />
        })}
      <h3 className="my-4">All Internships :</h3>
      {job &&
        job.map((job, i) => {
          return (
            <div className="row card " key={i}>
              <h3>
                <strong>Profile : </strong> {job.tittle}{" "}
              </h3>
              <div className="d-flex gap-5">
                 <p className="m-0">
                  <strong>Preferences : </strong> {job.preferences}{" "}
                </p>
                 <p className="m-0">
                  <strong>Number of Applied Students : </strong>{" "}
                  {job.students.length}{" "}
                </p>
              </div>
             

               <p className="m-0">
                {" "}
                <strong>jobnship type :</strong>
                {job.jobtype}{" "}
              </p>
              <p className="m-0">
                <strong>Skill :</strong>
                {job.skill}{" "}
              </p>
              <p className="m-0">
                <strong>Salary :</strong>
                {job.salary}{" "}
              </p>
              <p className="m-0">
                <strong>Description
 :</strong>
                {job.description
}{" "}
              </p>
            </div>
          );
          //     <MaterialReactTable
          //     columns={columns}
          //     data={data}
          //     enableColumnActions={false}
          //     enableColumnFilters={false}
          //     enablePagination={false}
          //     enableSorting={false}
          //     enableBottomToolbar={false}
          //     enableTopToolbar={false}
          //     muiTableBodyRowProps={{ hover: false }}
          //     muiTableProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //     muiTableHeadCellProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //     muiTableBodyCellProps={{
          //       sx: {
          //         border: '1px solid rgba(81, 81, 81, 1)',
          //       },
          //     }}
          //   />
        })}

    </div>
  );
}

export default page;
