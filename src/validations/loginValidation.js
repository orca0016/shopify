import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  username: Yup.string()
    .min(3, "must be at least 3 characters long")
    .required(" username is required"),
  password: Yup.string().required(" password is required"),
});
