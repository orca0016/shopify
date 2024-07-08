import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { stagger, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { prefixer } from "stylis";
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";
import { Menu } from "../components/Header/Menu";
import { toastComponent, toastErrorComponent } from "../components/toast";
import MainContext from "../context";
import { darkTheme } from "./themes";

import {
  addNewCommentProducts,
  addNewUser,
  deleteCommentProducts,
  getAllCommentProducts,
  getAllProducts,
  getAllUsers,
  replyCommentProducts,
} from "../services/servic";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer],
});
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);
  return scope;
}
const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useImmer(false);
  const [allProduct, setAllProduct] = useImmer([]);
  const [renderCart, setRenderCart] = useImmer(false);
  const [favoriteProduct, setFavoriteProduct] = useImmer([]);
  const [commentProducts, setCommentProducts] = useImmer([]);
  const [forceRenderLogin, setForceRenderLogin] = useImmer(false);
  const [profiles, setProfiles] = useImmer([]);
  const [user, setUser] = useState({
    id: "0",
    username: "default",
    srcProfile: "https://mui.com/static/images/avatar/1.jpg",
    email: "default@gmail.com",
    password: "000",
  });

  /* -----------------------------------get all information in server and save to states----------------------------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productFetch } = await getAllProducts();
        const { data: commentProductFetch } = await getAllCommentProducts();
        const { data: profilesFetch } = await getAllUsers();
        setAllProduct(productFetch);
        setCommentProducts(commentProductFetch);
        setProfiles(profilesFetch);
      } catch (err) {
        console.log(err.message);
        toastErrorComponent("server is off 📵☣⁉");
      }
    };
    fetchData();
  }, []);

  /* -----------------------------------get data from localStorage if exist and save in state ----------------------------------- */
  useEffect(() => {
    const isTrue = localStorage.getItem("favoritesProduct");
    const isUser = localStorage.getItem("userId");
    if (isTrue) {
      setFavoriteProduct(JSON.parse(isTrue));
    }
    if (isUser) {
      setUser(JSON.parse(isUser));
    }
  }, [profiles, forceRenderLogin]);

  /* -----------------------------------comments actions for product function----------------------------------- */
  const createNewComment = async (value) => {
    try {
      const { status, data } = await addNewCommentProducts(value);
      if (status === 201) {
        toastComponent("your comment has been submit");
        setCommentProducts((draft) => {
          return [...draft, data];
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const replyCommentProduct = async (value, path) => {
    try {
      const { status, data } = await replyCommentProducts(value, path);
      if (status === 200) {
        toastComponent("your comment has been submit");
        setCommentProducts((draft) => {
          const contactIndex = draft.findIndex((c) => c.id === parseInt(path));
          draft[contactIndex] = { ...data };
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const deleteCommentProduct = async (id) => {
    const commentBackup = [...commentProducts];

    try {
      setCommentProducts((draft) => commentProducts.filter((c) => c.id !== id));
      const { status } = await deleteCommentProducts(id);

      toastComponent("Your comment has been deleted");
      if (status !== 200) {
        setCommentProducts(commentBackup);
      }
    } catch (err) {
      console.log(err.message);
      setCommentProducts(commentBackup);
    }
  };
  const deleteReplyCommentProduct = async (commentId, replyCommentId) => {
    console.log(commentId, replyCommentId);
    const commentBackup = [...commentProducts];
    let commentSingle = commentProducts.find((e) => e.id === commentId);
    let replyCommentSingle = commentSingle.isReply;
    let filterCommentReply = replyCommentSingle.filter(
      (e) => e.id !== replyCommentId
    );

    let finalData = { ...commentSingle, isReply: filterCommentReply };

    try {

      const { status, data } = await replyCommentProducts(finalData, commentId);
      if (status === 200) {
        setCommentProducts((draft) => {
          const contactIndex = draft.findIndex((c) => c.id === commentId);
          draft[contactIndex] = { ...data };
        });
        toastComponent("Your comment has been deleted");
      }
    } catch (err) {
      console.log(err.message);
      setCommentProducts(commentBackup);
    }
  };

  /* -----------------------------------create a new user and save last one into the localStorage----------------------------------- */

  const createNewUser = async (value, id) => {
    try {
      const { status, data } = await addNewUser(value);
      if (status === 201) {
        toastComponent("Your account has been created");
        setProfiles((draft) => [...draft, data]);
        const newUser = data;

        localStorage.setItem("userId", JSON.stringify(data));
      }
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <div>
      <SWRConfig>
        {/* -----------------------------------get all data for context ----------------------------------- */}
        <MainContext.Provider
          value={{
            drawerOpen: isOpen,
            setDrawerOpen: setIsOpen,
            allProduct,
            setAllProduct,
            renderCart,
            setRenderCart,
            favoriteProduct,
            setFavoriteProduct,
            commentProducts,
            setCommentProducts,
            createNewComment,
            createNewUser,
            profiles,
            setProfiles,
            user,
            setUser,
            replyCommentProduct,
            deleteCommentProduct,
            deleteReplyCommentProduct,
            forceRenderLogin,
            setForceRenderLogin,
          }}
        >
          {/* -----------------------------------catch and theme provider for mui  ----------------------------------- */}
          <CacheProvider value={cacheRtl}>
            {/* -----------------------------------alert and toast seatings----------------------------------- */}
            <ToastContainer
            stacked 
             position= "bottom-left"
             autoClose= {3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              draggable
              pauseOnHover
              theme="dark"
            />
            <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
          </CacheProvider>
        </MainContext.Provider>
      </SWRConfig>
    </div>
  );
};

export default MainLayout;
