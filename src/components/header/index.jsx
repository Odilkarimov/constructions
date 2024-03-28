import Icon from "../../assets/icon.png";
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
      <List>salom</List>
      <Divider />
    </Box>
  );
  return (
    <div className="bg_construction bg-cover w-full h-[600px] maxw-[1300px]">
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
          <li className="text-white">
            <a href="">Ma'lumotlar</a>
          </li>
          <li className="text-white">
            <a href="">Biz haqimizda</a>
          </li>
          <li className="text-white">
            <a href="">Korxonalar</a>
          </li>
          <li>
            <div className="text-white">
              <img src={Icon} width={70} alt="" />
              <h2>Odil Karimov</h2>
            </div>
          </li>
          <li className="text-white">
            <a href="">Afzalliklarimiz</a>
          </li>
          <li className="text-white">
            <a href="">Yangiliklar</a>
          </li>
          <li className="text-white">
            <a href="">Aloqa</a>
          </li>
        </ul>
      </div>
      <div className="container-box">
        <h2 className="text-[85px] font-bold max-md:text-[40px] text-black max-md:mb-[20px]">
          ODIL <br /> KARIMOV BUILD
        </h2>
        <p className="text-[30px] font-semibold mb-[30px] text-black max-md:text-[20px]">
          Biz qilgan ishlarning hammasi a'lo
        </p>
        <div className="flex gap-[20px]">
          <button className="text-black border-[2px] border-black rounded-2xl w-[134px] h-[44px] font-semibold hover:bg-[#435482] hover:text-white">
            Bog'lanish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
