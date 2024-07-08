import {
  ArrowLeftOutlined,
  CloseRounded,
  LockPersonRounded,
  MenuRounded,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/AiMentor-logo.png";
import { useImmer } from "use-immer";
import Search from "./Search";

import MainContext from "../context";
import CartHeader from "./Header/CartHeader";
import UserProfile from "./Header/UserProfile";
import DrawerHeader from "./DrawerHeader";
const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useImmer(false);
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`navbar${
          sticky.isSticky ? " sticky" : ""
        }  w-full h-[60px] fixed text-white items-center px-3  max-md:justify-around`}
      >
        <div className=" flex gap-5 ">
          <div>
            <img src={logo} alt="logo header" className="my-auto" />
          </div>
        </div>
        <div className="menu  h-[60px] ml-5 max-md:hidden mr-auto">
          <ul className="flex h-[60px]   menu-item   text-[#ffff] gap-4  ">
            <li className="my-auto">
              <div className="item-header">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className="item-header">
                {" "}
                <ArrowLeftOutlined className="arrow-header" />
                Pages
              </div>

              <ul>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    F&Q
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="item-header">
                <ArrowLeftOutlined className="arrow-header" />
                Blogs
              </div>
              <ul>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="item-header">
                <ArrowLeftOutlined className="arrow-header" />
                Shop
              </div>
              <ul>
                <li>
                  <NavLink
                    to="/checkout"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Checkout
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "text-accent" : "text-white"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="item-header">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className=" hidden max-md:flex ">
            <CartHeader />
            <Search />
        </div>
        <div className="button-group flex  items-center justify-right max-md:hidden ">
          <div className="flex">
            <CartHeader />
            <Search />
          </div>
          {localStorage.getItem("userId")  ? (
            <UserProfile setShowProfile={setShowProfile} />
          ) : (
            <Link to="/login">
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "#7f00ff",
                  },
                  width: "100px",
                }}
                className="rounded-md  text-btn-card px-4"
                color="secondary"
                startIcon={<LockPersonRounded className="ml-0 mx-2 " />}
              >
                login
              </Button>
            </Link>
          )}
        </div>
        <div className="btn-res max-md:flex  hidden">
          <DrawerHeader open={drawerOpen} setDrawerOpen={setDrawerOpen}/>
        </div>

      </div>
    </>
  );
};

export default Header;
