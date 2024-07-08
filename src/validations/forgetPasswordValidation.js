import * as Yup from "yup";

export  const forgetPasswordValidation = Yup.object().shape({
    newPassword: Yup.string().email("The email is not valid").required(" Email address is required"),
})  

