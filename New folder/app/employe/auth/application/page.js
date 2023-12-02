"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { useDispatch, useSelector } from "react-redux";
import { readcreatedInter } from "@/store/Actions/employeAction";

function page() {
  const dispatch = useDispatch();
const [intern,setIntern]=useState([])
  useEffect(() => {
    const getallIntern = async () => {
      try {
        const {internships} = await dispatch(readcreatedInter());
        setIntern(internships)
        console.log("all intern", internships);
      } catch (error) {
        console.log(error);
      }
    };
    getallIntern()
  }, []);
  const { employe } = useSelector((state) => state.employeReducer);
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
      {console.log("jobs", employe && employe.jobs)}
      {intern &&
        intern.map((job, i) => {
          return (
            <div key={i}>
              <h1>{job.skill} </h1>
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
