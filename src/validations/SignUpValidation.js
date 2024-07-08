import * as Yup from "yup";

export const SignUpValidation = Yup.object().shape({
  username: Yup.string()
    .min(3, "must be at least 3 characters long")
    .required(" username is required"),
  email: Yup.string()
    .email("The email is not valid")
    .required(" Email address is required"),
  password: Yup.string().required(" password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .test("passwords-match", "Passwords do not match", function (value) {
      return this.parent.password === value;
    }),
});
