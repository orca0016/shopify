import { Zoom, toast } from "react-toastify";

export const toastComponent = (text = "default text") => {
  toast.success(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
};
export const toastErrorComponent = (text = "default text") => {
  toast.error(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
};
export const toastWarningComponent = (text = "default text") => {
  toast.warn(text, {
    position: "bottom-left",
autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
};
export const toastDefaultComponent = (text = "default text") => {
  toast(text, {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
};
export const toastInfoComponent = (text = "default text") => {
  toast.info(text, {
    position: "bottom-left",
autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
};
