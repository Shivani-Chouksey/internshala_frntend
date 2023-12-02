"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import bootstap from  'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { useEffect } from "react";


const Wrapper = ({ children }) => {

    
  useEffect(() => {
    bootstap
  }, []);
  return (
    <>
      <Provider store={store}>
    
        {children}
        <ToastContainer />
      </Provider>
    </>
  );
};

export default Wrapper;
