// import axios from "@/utils/axios";

// import {
//   addemploye,
//   removeemploye,
//   iserror,
//   removeerror,
// } from "../Reducers/employeReducer";

// export const asynCurrentemploye = async (dispatch, getState) => {
//     try {
//         const { data } = await axios.get("/");
//         console.log(data)
//     } catch (error) {
//         console.log(error)

//     }

// };

import axios from "@/utils/axios";
import {
  addemploye,
  removeemploye,
  iserror,
  removeerror,
} from "../Reducers/employeReducer";
import { toast } from "react-toastify";

// Define your asynchronous action creator using Redux Thunk
export const fetchCurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    // console.log(data.employe);
    dispatch(addemploye(data.employe));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    console.log(error.response.data.message);
  }
};
export const asyncSignupemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signup", employe);
    fetchCurrentemploye();
    console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncSigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signin", employe);
    fetchCurrentemploye();
    console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncSignoutemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/employe/signout", employe);
    dispatch(removeemploye(data));
    // fetchCurrentemploye()
    // console.log(data);
  } catch (error) {
    dispatch(iserror(error.response.data.message));

    console.log(error.response.data.message);
    // Dispatch your error action (e.g., iserror) here if needed
  }
};

export const asyncUpdateemploye = (employe) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/update/" + _id, employe);
    dispatch(fetchCurrentemploye());
    toast.success("employe Updated Success", { position: "top-center" });
    // fetchCurrentemploye()
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
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/avtar/" + _id, avatar);
    dispatch(fetchCurrentemploye());
    toast.success("employe Profile Updated Success", {
      position: "top-center",
    });
    // fetchCurrentemploye()
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
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post(
      "/employe/reset-password/" + _id,
      password
    );
    dispatch(fetchCurrentemploye());
    toast.success("employe Profile Updated Success", {
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
    const { data } = await axios.post("/employe/send-mail/", email);
    // dispatch(fetchCurrentemploye());
    toast.success("Mail send Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};

export const asyncOtpPassword = (password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/forget-link/", password);
    await dispatch(fetchCurrentemploye());
    toast.success("Passord change  Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};


export const asyncCreatejobEmploye = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/job/create", job);
    await dispatch(fetchCurrentemploye());
    toast.success("Job Created Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};


export const asyncCreateinternEmploye = (intern) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/interenship/create", intern);
    await dispatch(fetchCurrentemploye());
    toast.success("Internship Created Successfully", { position: "top-center" });
  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};



//read createdinter

export const readcreatedInter = () => async (dispatch, getState) => {  
  try {
    const { data } = await axios.get("/employe/internship/read/");
    console.log("internship",data)

    await dispatch(fetchCurrentemploye());
    return data;
    toast.success("Apply Internship  Successfully", { position: "top-center" });


  } catch (error) {
    dispatch(iserror(error.response.data.message));
    toast.error(error.response.data.message, { position: "top-center" });

    console.log(error.response.data.message);
  }
};
