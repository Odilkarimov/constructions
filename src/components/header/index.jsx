import Icon from "../../assets/icon.png";
import Close from "../../assets/closIcon.jpg";
import Menu from "../../assets/menu.png";
import Phone from "../../assets/phone.png";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="px-[20px] py-[10px]">
          <div className="flex items-center justify-end">
            <img
              width={40}
              src={Close}
              alt="close"
              className="cursor-pointer"
            />
          </div>
          <ul className="flex items-start flex-col justify-center gap-[10px] ">
            <li className="font-semibold">
              <a href="#malumotlar">Ma'lumotlar</a>
            </li>
            <li className="font-semibold">
              <a href="#bizhaqimizda">Biz haqimizda</a>
            </li>
            <li className="font-semibold">
              <a href="#korhonalar">Korxonalar</a>
            </li>
            <li className="font-semibold">
              <a href="#avzaliklarimiz">Afzalliklarimiz</a>
            </li>
            <li className="font-semibold">
              <a href="#yangiliklar">Yangiliklar</a>
            </li>
            <li className="font-semibold">
              <a href="#aloqa">Aloqa</a>
            </li>
          </ul>
        </div>
      </List>
    </Box>
  );
  return (
    <div className="bg_construction bg-cover w-full h-[600px]">
      <div className="max-lg:bg-[#2c3442] max-md:mb-[50px]">
        <div className="flex lg:hidden items-center justify-between px-[30px]">
          <div>
            <div>
              <img
                src={Menu}
                width={50}
                alt="menu"
                onClick={toggleDrawer("left", true)}
              />
            </div>
            <div className="hidden">
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <img src={Icon} width={70} alt="" />
          </div>
          <div>
            <img width={40} src={Phone} alt="" />
          </div>
        </div>

        <ul className="flex items-center justify-center gap-[50px] max-lg:hidden">
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#malumotlar">Ma'lumotlar</a>
          </li>
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#bizhaqimizda">Biz haqimizda</a>
          </li>
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#korhonalar">Korxonalar</a>
          </li>
          <li>
            <div className="text-white flex gap-[10px] border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500  ">
              <img src={Icon} width={70} alt="" />
              <h2>
                Ataev <br /> Bahodir <br /> Build
              </h2>
            </div>
          </li>
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#avzaliklarimiz">Afzalliklarimiz</a>
          </li>
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#yangiliklar">Yangiliklar</a>
          </li>
          <li className="text-white border-b-[2px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-[#FFFF] duration-500">
            <a href="#aloqa">Aloqa</a>
          </li>
        </ul>
      </div>
      <div className="container-box">
        <h2 className="text-[85px] font-bold max-md:text-[40px]  max-md:mb-[20px] mt-[100px]">
          ATAEV <br /> BAHODIR BUILD
        </h2>
        <p className="text-[30px] font-semibold mb-[30px]  max-md:text-[20px]">
          Biz qilgan ishlarning hammasi a'lo
        </p>
        <div className="flex gap-[20px]">
          <button className=" border-[2px] border-white rounded-2xl w-[134px] h-[44px] font-semibold hover:bg-[#435482] hover:text-white">
            Bog'lanish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
