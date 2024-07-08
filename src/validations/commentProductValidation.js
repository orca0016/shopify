import * as Yup from "yup";

export const commentProductValidation = Yup.object().shape({
  title: Yup.string().required(" title is required"),
  message: Yup.string().required(" message  is required"),
});
