import { Transition } from "@headlessui/react";
import {
  CloseRounded,
  LockPersonRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainContext from "../context";
const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const { allProduct } = useContext(MainContext);

  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredData = allProduct.filter((item) => {
    // جستجو بر اساس نام و یا توضیحات
    return (
      item.nameProduct.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.informationProduct.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <>
      <IconButton
        onClick={() => setIsActive(true)}
        disableRipple
        color="light"
        className="rounded-md"
      >
        <SearchRounded className="ml-0 mx-2 text-6xl " />
      </IconButton>
      <Transition
        show={isActive}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div
          style={{ display: "flex" }}
          className="w-full h-[100vh] cont-search flex justify-center items-center"
        >
          <div
            onClick={() => setIsActive(false)}
            className="exit-btn cursor-pointer"
          >
            <CloseRounded sx={{ fontSize: "40px" }} />
          </div>

          <Box
            onClick={(e) => e.stopPropagation()}
            className="w-[50%] box-search-box flex-nowrap flex flex-col"
          >
            <div className="flex">
              <TextField
                variant="standard"
                color="secondary"
                placeholder="search . . . "
                onChange={onHandleChange}
                value={inputValue}
                sx={{
                  width: "100%",
                  backgroundColor: "#262626",
                  "&.MuiInput-input": {
                    height: "100px",
                    px: "10px",
                  },
                }}
              />
              <button className=" bg-btn-card">
                <SearchRounded className="m-1" />
              </button>
            </div>
            <Box
              className=" w-[100%] p-4 min-h-14 cont-result-search max-md:px-1"
              sx={{ maxHeight: "500px", overflowY: "auto" }}
            >
              {inputValue == ""
                ? ""
                : filteredData.map((item) => (
                    <Link
                      to={`shop/${item.id}`}
                      key={item.id}
                      className="bg-background-gray m-4 p-4 flex flex-col  cart-result-search items-center gap-2"
                      onClick={() => (

                        setIsActive(false),
                        setInputValue('')
                      )
                      }
                    >
                      <div>
                        <Avatar
                          sx={{
                            borderRadius: "6px",
                            width: {
                              xl: "60px",
                              lg: "60px",
                              md: "100%",
                              sm: "100%",
                              xs: "100%",
                            },
                            height: {
                              xl: "60px",
                              lg: "60px",
                              md: "100%",
                              sm: "100%",
                              xs: "100%",
                            },
                          }}
                          className="max-sm:w-full"
                          src={item.imageProduct}
                          alt="image product"
                        />
                      </div>
                      <div>
                        <Typography
                          variant={{
                            xl: "h4",
                            lg: "h4",
                            md: "h4",
                            sm: "h4",
                            xs: "h4",
                          }}
                        >
                          {item.nameProduct}
                        </Typography>
                        <br />
                        <Typography variant="caption">
                          {item.informationProduct.slice(0, 50)}...
                        </Typography>
                      </div>
                    </Link>
                  ))}
            </Box>
          </Box>
        </div>
      </Transition>
    </>
  );
};

export default Search;
