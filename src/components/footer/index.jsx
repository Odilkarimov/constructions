import Icon from "../../assets/icon.png";
import InstaIcon from "../../assets/instaIcon.png";
import FacIcon from "../../assets/facIcon.png";

const Footer = () => {
  return (
    <div className="text-black mt-[100px] mb-[100px]">
      <div className="container-box grid grid-cols-3 gap-[250px] max-md:grid-cols-2 max-lg:gap-[150px] max-md:gap-[50px]">
        <div className="flex flex-col gap-[20px]">
          <div className="text-white flex gap-[10px]">
            <img src={Icon} width={70} alt="" />
            <h2 className="text-black font-bold">
              Ataev <br /> Bahodir <br /> Build
            </h2>
          </div>
          <h2 className="text-[22px] max-md:text-[15px]">
            Ijtimoiy tarmoqlarimizga obuna bo'ling
          </h2>
          <ul className="flex items-center justify-start gap-[20px]">
            <li className="w-[50px] h-[50px]">
              <a href="https://www.instagram.com/ataev_bahodir_build">
                <img src={InstaIcon} alt="" />
              </a>
            </li>
            <li className="w-[50px] h-[50px]">
              <a href="https://www.facebook.com/profile.php?id=61556409174910&mibextid=LQQJ4d">
                <img src={FacIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[20px] max-md:text-[15px]">
            Kompaniyamiz
          </h2>
          <ul className="flex items-start justify-center flex-col gap-[20px] mt-[20px]">
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#">Korhonalar</a>
            </li>
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#bizhaqimizda">Biz haqimizda</a>
            </li>
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#yangiliklar">Yangiliklar</a>
            </li>

            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#bizningl">Bizning Loyihalarimiz</a>
            </li>
          </ul>
        </div>
        <div className="flex items-start flex-col gap-[20px] max-md:gap-[10px]">
          <h2 className="text-[25px] max-md:text-[18px]">Aloqa </h2>
          <p className="text-[20px] max-md:text-[15px]">+998974839999</p>
          <p className="text-[20px] max-md:text-[15px]">+998997126666</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
