import * as Yup from "yup";

export const contactValidation = Yup.object().shape({
  lastName: Yup.string().required(" lastName is required"),
  firstName: Yup.string().required(" firstName is required"),
  email: Yup.string()
  .email("The email is not valid")
  .required(" Email address is required"),
  phone: Yup.number().min(11 , 'The number is not valid').required("phone number is required"),
  message: Yup.string().min(10 , 'The message is not enough').required("message is required"),
});
