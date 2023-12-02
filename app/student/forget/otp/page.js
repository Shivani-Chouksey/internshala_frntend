// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const page = () => {


//   const [onchangeData, setOnchangeData] = useState({});
//   const [inputChange, setInputChange] = useState(false);
//   const dispatch=useDispatch()
// // const router=useRouter()
// //   const {errors}=useSelector((state)=> state.studentReducer)



//   const onchangHandler = (e) => {
//     setOnchangeData({ [e.target.name]: e.target.value });
//   };

// console.log(onchangeData)


//   const otpHandler= async(e)=>{
//     e.preventDefault();
//   await  dispatch(asyncForgetPassword(onchangeData));
// if(errors.length === 0){
//   router.push("/student/forget/otp")
// }

//   }
//   return (
//     <div>
//       <div>
//         <h3>Forgot password</h3>
//         <form onSubmit={otpHandler}>
//           <input
//             type="number"
//             name="otp"
//             value={onchangeData.otp}
//             onChange={onchangHandler}
//           />
//           <input
//             type="email"
//             name="email"
//             value={onchangeData.email}
//             onChange={onchangHandler}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default page;
