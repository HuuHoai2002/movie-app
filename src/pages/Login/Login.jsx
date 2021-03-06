import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string()
          .min(8, "Import into the minimum 8 character")
          .required("Required"),
      })}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 3000));
        console.log(values);
      }}>
      {(formik) => (
        <Form
          className="w-full max-w-[420px] mx-auto font-poppins"
          autoComplete="off">
          <div className="max-w-[300px] mx-auto pb-10 text-center">
            <h1 className="font-semibold text-3xl py-2">Hello Again!</h1>
            <span className="font-medium opacity-90">
              Welcome back , sign in to watch favorite movies!
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <Field
              name="email"
              type="text"
              placeholder="Enter your email address"
              required
              className="p-4 rounded-xl outline-none border-2 border-gray-100 focus:border-primary text-black"></Field>
            <div className="text-sm text-red-500">
              <ErrorMessage name="email"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <div className="relative">
              <Field
                name="password"
                type={hidePassword ? "password" : "text"}
                placeholder="Enter your password"
                className="p-4 rounded-xl outline-none border-2 border-gray-100 focus:border-primary text-black w-full"></Field>
              <div className="absolute right-0 top-2/4 -translate-y-2/4 mr-5">
                <div className="flex items-center justify-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 absolute fill-[#191A1F] ${
                      hidePassword ? "" : "hidden"
                    }`}
                    onClick={handleHidePassword}
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                      clipRule="evenodd"
                    />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 absolute fill-[#191A1F] ${
                      hidePassword ? "hidden" : ""
                    }`}
                    onClick={handleHidePassword}
                    viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-sm text-red-500">
              <ErrorMessage name="password"></ErrorMessage>
            </div>
          </div>
          <div className="mb-0">
            <button
              type="submit"
              className={`w-full flex items-center justify-center p-4 bg-primary text-white font-semibold rounded-xl shadow-[#702220] shadow-xl hover:opacity-90 transition-all`}
              disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "" : "Sign in"}
              <span
                className={`${
                  formik.isSubmitting
                    ? "w-6 h-6 rounded-full border border-white border-t-transparent animate-spin"
                    : ""
                }`}></span>
            </button>
          </div>
          <div className="my-10">
            <div className="flex items-center justify-center mb-10">
              <span className="flex-1 border-t border-primary opacity-70 ml-5"></span>
              <span className="text-sm font-medium px-5">Or continue with</span>
              <span className="flex-1 border-t border-primary opacity-70 mr-5"></span>
            </div>
            <div className="flex items-center justify-between mx-4">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="w-20 h-12 border-2 border-white flex items-center justify-center rounded-xl">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between  cursor-pointer">
                <div className="w-20 h-12 border-2 border-white flex items-center justify-center rounded-xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2 font-medium text-sm">
            <span>Not a member?</span>
            <span className="text-blue-600 cursor-pointer ">Register now</span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
