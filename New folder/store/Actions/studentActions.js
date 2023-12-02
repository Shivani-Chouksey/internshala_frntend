// import axios from "@/utils/axios";

// import {
//   addstudent,
//   removestudent,
//   iserror,
//   removeerror,
// } from "../Reducers/studentReducer";

// export const asynCurrentStudent = async (dispatch, getState) => {
//     try {
//         const { data } = await axios.get("/");
//         console.log(data)
//     } catch (error) {
//         console.log(error)

//     }

// };

import axios from "@/utils/axios";
import {
  addstudent,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

// Define your asynchronous action creator using Redux Thunk
export const fetchCurrentStudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    // console.log(data.student);
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    console.log(error.response.data.message);
  }
};
export const asyncSignupStudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup", student);
    fetchCurrentStudent();
    console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncSigninStudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    fetchCurrentStudent();
    console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncSignoutStudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout", student);
    dispatch(removestudent(data));
    // fetchCurrentStudent()
    // console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncUpdateStudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(fetchCurrentStudent());
    toast.success("student Updated Success", { position: "top-center" });
    // fetchCurrentStudent()
    // console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncUpdateAvatar = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avtar/" + _id, avatar);
    dispatch(fetchCurrentStudent());
    toast.success("student Profile Updated Success", {
      position: "top-center",
    });
    // fetchCurrentStudent()
    // console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncResetPassword = (password) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post(
      "/student/reset-password/" + _id,
      password
    );
    dispatch(fetchCurrentStudent());
    toast.success("student Profile Updated Success", {
      position: "top-center",
    });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};

export const asyncForgetPassword = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/send-mail/", email);
    // dispatch(fetchCurrentStudent());
    toast.success("Mail send Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};

export const asyncOtpPassword = (password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/", password);
    await dispatch(fetchCurrentStudent());
    toast.success("Passord change  Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};

export const getallIntern = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/allinternships/");
    // console.log("internship",data)

    await dispatch(fetchCurrentStudent());
    return data;
    
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};
export const getalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/alljobs/");
    // console.log("internship",data)

    await dispatch(fetchCurrentStudent());
    return data;

  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};
export const asyncApplyJob = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/"+id);
    // console.log("internship",data)

    await dispatch(fetchCurrentStudent());
    return data;
    toast.success("Apply Job  Successfully", { position: "top-center" });

  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};
export const asyncApplyIntern = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/internship/"+id);
    // console.log("internship",data)

    await dispatch(fetchCurrentStudent());
    return data;
    toast.success("Apply Internship  Successfully", { position: "top-center" });


  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};
