import { ArrowBackOutlined, DatasetSharp } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { imgCheckoutGirl, mouseCheckOut, noItem } from "../assets";
import FormCheckOut from "./CheckOut/FormCheckOut";
import "./CheckOut/style.css";
import { useEffect, useState } from "react";
const CheckOut = () => {
  function goBack() {
    window.history.back();
  }
  const [block, setBlock] = useState(false);
  const [dataCheck, setDataCheck] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const isData = localStorage.getItem('cartProduct'); 
    if (isData) {
      setDataCheck(JSON.parse(isData));
    }
  }, []);
  
  useEffect(() => {
    let totalPrice = 0;
    for (const obj of dataCheck) {
      totalPrice += parseInt(obj.priceProduct.replace(/,/g, ""));
    }
    setTotalPrice(totalPrice);
  }, [dataCheck]);
  return (
    <>
      <div className="cont-check-out relative">
        <div className="right-bgCheck-out flex flex-col  gap-4 px-20 justify-start pt-32 ">
          <div className="btn-back-checkout">
            <IconButton onClick={goBack}>
              <ArrowBackOutlined />
            </IconButton>
          </div>
          <div className="information-text-checkout relative">
            <Typography
              variant="h3"
              sx={{ fontSize: { sm: "30px", xs: "30px" } }}
            >
              Customer settlement
            </Typography>
            <div className="item-hover-checkout mt-6">
              <Button  variant="contained"color='secondary' onClick={()=>{setBlock(!block)}}>
              The products you want to buy
              </Button>
              <div style={{display:block? "block": "none"}} className="absolute w-full  div-item-hover-checkout">
                <ul>
                  {dataCheck.length > 0 ? dataCheck.map((person, index) => (
                    <li
                      key={index}
                      className="item-checkout"
                      style={{ animationDelay: `.${index}s` }}
                    >
                     {index+1}- {person.nameProduct}
                    </li>
                  )): (
                    <div style={{backgroundColor:"#fff2" , backdropFilter:"blur(8px)"}} className='w-[50%]  rounded-md p-6'>
                      <h5 className='text-center'>not found any product</h5>
                      <img src={noItem} alt="no item"/>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* <div> */}
          <img
            src={imgCheckoutGirl}
            style={{ position: "fixed", bottom: "0px", left: "0px" }}
            width={"400em"}
            alt="image product"
          />
          {/* </div> */}
        </div>
        <div className="form-check-out flex flex-col justify-center items-center gap-10">
          <FormCheckOut price={totalPrice} />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
