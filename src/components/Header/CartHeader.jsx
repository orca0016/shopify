import { Popover, Transition } from "@headlessui/react";
import { DeleteForeverRounded, LocalMallRounded } from "@mui/icons-material";
import { Alert, Avatar, Badge, Chip, IconButton } from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import { emptyCart } from "../../assets";
import MainContext from "../../context";
const CartHeader = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const { renderCart } = useContext(MainContext);

  useEffect(() => {
    const cartProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCartProduct(cartProduct);
  }, [renderCart]);
  const handleDeleteItem = (props) => {
    const filter = cartProduct.filter((item) => item.id != props);
    setCartProduct(() => filter);
    localStorage.setItem("cartProduct", JSON.stringify(filter));
  };
  return (
    <>
      <div className=" w-full  px-4">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "text-white" : "text-white/90"}
                group flex items-center flex-col rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none  `}
              >
                <Badge badgeContent={cartProduct.length} color="secondary">
                  <LocalMallRounded color="action" />
                </Badge>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  style={{ width: "300px" }}
                  className="  absolute left-0 z-10 mt-3 w-screen  -translate-x-1/2 transform px-4 sm:px-0 "
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 ">
                    <div className="relative grid gap-4  p-3 lg:grid-cols-1 bg-background-gray">
                      {cartProduct.map((item) => (
                        <div
                          key={item.id}
                          className=" flex w-full relative bg-btn-card justify-between items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                        >
                          <div className="flex">
                            <div className="flex h-10 w-10  items-center justify-center text-white sm:h-12 sm:w-12">
                              <Avatar
                                src={item.imageProduct}
                                sx={{ borderRadius: "5px" }}
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.nameProduct.slice(0, 20)}...
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.priceProduct}
                              </p>
                            </div>
                          </div>
                          <div>
                            <IconButton
                              onClick={() => {
                                handleDeleteItem(item.id);
                              }}
                            >
                              <DeleteForeverRounded />
                            </IconButton>
                          </div>
                        </div>
                      ))}
                      {cartProduct.length > 0 ? (
                        <Alert variant="outlined" severity="warning">
                          your cart shop
                        </Alert>
                      ) : (
                        <>
                          <img
                            className="mx-auto"
                            src={emptyCart}
                            alt="cart empty image"
                          />
                          <div className="text-center ">
                            your cart is empty 😭
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </>
  );
};

export default CartHeader;
