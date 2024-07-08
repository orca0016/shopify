import { AddShoppingCartRounded, CheckBoxRounded } from "@mui/icons-material";
import { LoadingButton,TabContext,TabList,TabPanel  } from "@mui/lab";
import {Box ,Tab, Paper, Typography } from "@mui/material";

import { useImmer } from "use-immer";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toastComponent, toastErrorComponent } from "../components/toast.jsx";
import FormCommentProduct from "./Shop/FormCommentProduct.jsx";
import DialogComment from "../components/DialogComment.jsx";
import CommentProduct from "./Shop/CommentProduct.jsx";
import { getProduct } from "../services/servic.js";
import MainContext from "../context";

const SingleProduct = () => {
  const { renderCart, setRenderCart, commentProducts ,createNewComment} =
    useContext(MainContext);
  const [accessTopPurchase, setAccessTopPurchase] = useImmer(true);
  const [cartProducts, setCartProducts] = useImmer([]);
  const [indexProduct, setIndexProduct] = useImmer(1);
  const [openDialog, setOpenDialog] = useImmer(false);
  const [loading, setLoading] = useImmer(false);
  const [value, setValue] = useImmer("1");
  const { shopId } = useParams();

  const [single, setSingle] = useState({
    id: 1,
    nameProduct: "",
    informationProduct: "",
    priceProduct: "",
    imageProduct:
      "https://mihanwp.com/demo/ahura/digigame/wp-content/uploads/sites/128/2024/03/marathon-1536x864.webp",
    averageProduct: "",
  });

  /* -----------------------------------get single data in all of data----------------------------------- */
  const filterdata = commentProducts.filter((data) => data.postId == shopId);

  /* -----------------------------------for chang the tabs----------------------------------- */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* -----------------------------------fetch product data from server----------------------------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: singleProduct } = await getProduct(shopId);
        setSingle(singleProduct);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [shopId]);

  /* -----------------------------------get cart product and access to add new product to cart----------------------------------- */
  useEffect(() => {
    if (cartProducts.some((p) => p.id === single.id)) {
      setAccessTopPurchase(false);
    }
    const savedProducts = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCartProducts(savedProducts);
  }, [accessTopPurchase]);

  /* -----------------------------------separate 3 by 3 price product----------------------------------- */
  const toNumber = Number(single.priceProduct) * indexProduct;
  let price = JSON.stringify(toNumber);
  price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  /* -----------------------------------all of work for add a product in cart----------------------------------- */
  function handleClickLoading() {
    const isProductExist = cartProducts.some((p) => p.id === single.id);
    if (isProductExist) {
      toastErrorComponent("This product is in the shopping cart");
      setAccessTopPurchase(!accessTopPurchase);
    } else {
      setAccessTopPurchase(!accessTopPurchase);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      // اضافه کردن محصول به لیست محصولات
      const updatedProducts = [
        ...cartProducts,
        { ...single, priceProduct: price },
      ];
      setCartProducts(updatedProducts);
      localStorage.setItem("cartProduct", JSON.stringify(updatedProducts));
      setRenderCart(!renderCart);
      toastComponent("product added to cart");
    }
  }

  return (
    <>
      <div className="bg-blogs-show min-h-[100vh] pt-32 px-32 pb-32 ">
        <Paper
          elevation={3}
          className="pb-12"
          sx={{
            backgroundColor: "#0f11158a",
            backdropFilter: "blur(8px)",
            borderRadius: "6px",
          }}
        >
          
            {/* -----------------------------------information name, pic and .... product----------------------------------- */}
          <div className="flex cont-info-single-product gap-6">
            <div className=" img-single-product w-[50%]">
              <img
                src={single.imageProduct}
                alt="image product"
                style={{ borderRadius: "6px 0 0 0 ", width: "100%" }}
              />
            </div>
            <div className="flex pt-10 flex-col items-start gap-3 information-single-product">
              <Typography className="title-single-product" variant="h3">
                {single.nameProduct}
              </Typography>
              <Typography
                className="more-info-single-product"
                variant="caption"
              >
                {single.informationProduct.length < 50
                  ? single.informationProduct
                  : `${single.informationProduct.slice(0, 50)}...`}
              </Typography>
              <Typography
                className="more-info-single-product"
                variant="caption"
              >
                average : {single.averageProduct}
              </Typography>
              <Typography
                variant="h4"
                className="price-single-product"
                color="primary"
              >
                {price}$
              </Typography>
              <div className="flex row-btn-single-product gap-6">
                <LoadingButton
                  color="secondary"
                  onClick={handleClickLoading}
                  loading={loading}
                  loadingPosition="end"
                  endIcon={
                    accessTopPurchase ? (
                      <AddShoppingCartRounded
                        sx={{ display: loading ? "none" : "" }}
                      />
                    ) : (
                      <CheckBoxRounded
                        sx={{ display: loading ? "none" : "" }}
                      />
                    )
                  }
                  variant="contained"
                  fullWidth
                  sx={{
                    gap: "15px",
                    borderRadius: "5px",
                    px:{
                      // xl:'30px' ,
                      // lg:"40px",
                      // md:'40px',
                      sm:'10px',
                      xs:'6px'
                    }
                  }}
                  className="btn-shop"
                >
                  <span className="fontsize-btn-add-product">
                    {accessTopPurchase ? "Add To Cart" : "Already added"}
                  </span>
                </LoadingButton>
                <div className="add-item-product">
                  <button
                    className="mines"
                    onClick={() =>
                      setIndexProduct(indexProduct <= 0 ? 0 : indexProduct - 1)
                    }
                  >
                    <span>
                    -
                    </span>
                  </button>
                  <input
                    type="number"
                    value={indexProduct}
                    onChange={(e) =>
                      setIndexProduct(indexProduct < 10 ? e.target.value : 0)
                    }
                    max={10}
                    min={1}
                  />
                  <button
                    className="plus"
                    onClick={() =>
                      setIndexProduct(indexProduct >= 10 ? 1 : indexProduct + 1)
                    }
                  >
                    <span>
                    +
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-24 px-10 more-information-single-product">
            <Box sx={{ width: "100%" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  {/* -----------------------------------tab header section----------------------------------- */}
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab label="information" value="1" />
                    <Tab label="comments" value="2" />
                  </TabList>
                </Box>
                {/* -----------------------------------information section----------------------------------- */}
                <TabPanel value="1">{single.informationProduct}</TabPanel>
                {/* -----------------------------------comment section----------------------------------- */}
                <TabPanel value="2">
                  <div className="comment">
                    <div className="flex justify-between">
                      <Typography variant="h4" color="grey">
                        Comment({filterdata.length})
                      </Typography>

                      <div>
                        {/* dialog section */}
                        <DialogComment
                          open={openDialog}
                          setOpen={setOpenDialog}
                        >
                          <FormCommentProduct service={createNewComment} setOpenDialog={setOpenDialog} />
                        </DialogComment>
                      </div>
                    </div>

                    {/* commnet section  */}
                    <CommentProduct CommentProductId={shopId} />
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SingleProduct;
