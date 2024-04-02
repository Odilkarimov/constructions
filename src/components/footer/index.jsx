import Icon from "../../assets/icon.png";
import InstaIcon from "../../assets/instaIcon.png";
import FacIcon from "../../assets/facIcon.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="text-black mt-[100px] mb-[100px] max-md:mt-[30px] max-md:mb-[30px]">
      <div className="container-box grid grid-cols-3 gap-[250px] max-md:grid-cols-2 max-lg:gap-[150px] max-md:gap-[50px]">
        <div className="flex flex-col gap-[20px]">
          <div className="text-white flex gap-[10px]">
            <img src={Icon} width={70} alt="" />
            <h2 className="text-black font-bold">{t("footer.text1")}</h2>
          </div>
          <h2 className="text-[22px] max-md:text-[15px]">
            {t("footer.text2")}
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
            {t("footer.text3")}
          </h2>
          <ul className="flex items-start justify-center flex-col gap-[20px] mt-[20px]">
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#">{t("footer.text4")}</a>
            </li>
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#bizhaqimizda">{t("footer.text5")}</a>
            </li>
            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#yangiliklar">{t("footer.text6")}</a>
            </li>

            <li className=" border-b-[2px] text-[19px] max-md:text-[15px] border-b-transparent border-t-[3px] border-t-transparent hover:border-b-black duration-500">
              <a href="#bizningl">{t("footer.text7")}</a>
            </li>
          </ul>
        </div>
        <div className="flex items-start flex-col gap-[20px] max-md:gap-[10px]">
          <h2 className="text-[25px] max-md:text-[18px]">
            {t("footer.text8")}
          </h2>
          <p className="text-[20px] max-md:text-[15px]">+998974839999</p>
          <p className="text-[20px] max-md:text-[15px]">+998997126666</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
