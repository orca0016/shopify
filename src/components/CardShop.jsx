import {
  Favorite,
  FavoriteBorderRounded,
  StarRounded,
} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context";
import { toastComponent, toastWarningComponent } from "./toast.jsx";

const CardShop = (props) => {
  const [star, setStar] = useState(false);
  const { favoriteProduct, setFavoriteProduct } = useContext(MainContext);

  const objectCardProduct = props;
  const navigate = useNavigate();

  let price = props.priceProduct;
  price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const isTrue = localStorage.getItem("favoritesProduct");
    if ((isTrue, favoriteProduct.find((e) => e.id === objectCardProduct.id))) {
      setStar(true);
    }
  }, [star]);

useEffect(()=>{
  localStorage.setItem("favoritesProduct", JSON.stringify(favoriteProduct));
},[favoriteProduct]);

  const clickLoveEmoji = () => {
    if (!star) {
      if (favoriteProduct.length <= 0) {
        setFavoriteProduct(()=> [objectCardProduct]);
        toastComponent('added to favorite 👍');
      } else {
        setFavoriteProduct(()=> [...favoriteProduct, objectCardProduct]);
        toastComponent('added to favorite 👍');
      } 
    } else {
      const filterP = favoriteProduct.length <= 0? [] : favoriteProduct.filter((item) => item.id !== objectCardProduct.id);
      setFavoriteProduct(filterP);
      toastWarningComponent('removed from favorite 😪');
    }
    setStar(!star);
  };
  return (
    <div>
      <Card
        sx={{
          width: {
            sm: 300,
            xs: 250,
          },
          p: "10px",
          borderRadius: "7px",
          mx: {
            sm: "auto",
            xs: "auto",
          },
        }}
        className="card-blogs "
      >
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            borderRadius: "6px",
          }}
        >
          <Link to={`./${props.id}`}>
            <CardMedia
              component="img"
              alt="green iguana"
              className="img-blog-card"
              height="60"
              sx={{
                transition: ".6s",
                "&:hover": {
                  scale: "1.1",
                },
              }}
              image={props.imageProduct}
            />
          </Link>

          <IconButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#0c0c0ca4",
            }}
            className="backdrop-blur-sm w-[30px] "
            aria-label="delete"
            size="small"
            onClick={clickLoveEmoji}
          >
            {
            favoriteProduct.find((e) => e.id === objectCardProduct.id) ? (
              <Favorite fontSize="inherit" />
            ) : (
              <FavoriteBorderRounded fontSize="inherit" />
            )}
          </IconButton>
        </div>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Tooltip title={props.nameProduct} placement="top-start" arrow>
            <Typography variant="h5" sx={{ cursor: "default" }}>
              {props.nameProduct.length < 20
                ? props.nameProduct
                : `${props.nameProduct.slice(0, 20)}...`}
            </Typography>
          </Tooltip>

          <Typography variant="caption">
            {props.informationProduct.length < 100
              ? props.informationProduct
              : `${props.informationProduct.slice(0, 100)}...`}
          </Typography>
          <div className="flex justify-between">
            <div>
              <Typography color="secondary" variant="h5">
                ${price}
              </Typography>
            </div>
            <div>
              <Typography variant="caption" color="GrayText">
                <Chip
                  sx={{ px: "10px", py: "5px", backgroundColor: "#262626" }}
                  size="large"
                  label={props.averageProduct}
                  icon={<StarRounded />}
                />
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-full ">
              <Button
                color="secondary"
                onClick={() => navigate(`./${props.id}`)}
                variant="contained"
                fullWidth
                sx={{
                  gap: "15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <span>
                  <Link>Show </Link>
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardShop;
