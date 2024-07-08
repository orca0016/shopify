import { ArrowLeftOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export function Menu({ close }) {
  return (
    <nav>
      <ul className="flex flex-col gap-3 list-drawer ">
        <li className="my-auto">
          <div className="item-header-drawer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
              onClick={close}
            >
              Home
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-white"
            }
            onClick={close}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <div className="item-header-drawer">
            <ArrowLeftOutlined className="arrow-header" />
            Pages
          </div>

          <ul className="ml-12 flex flex-col gap-3">
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-accent" : "text-white"
                }
                onClick={close}
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
                onClick={close}
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
                onClick={close}
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <div className="item-header-drawer">
            <ArrowLeftOutlined className="arrow-header" />
            Shop
          </div>
          <ul className="ml-12 flex flex-col gap-3">
            <li>
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "text-accent" : "text-white"
                }
                onClick={close}
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
                onClick={close}
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <div className="item-header-drawer">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
              onClick={close}
            >
              Contact
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}
