import { useTranslation } from "react-i18next";
import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.webp";
import Img3 from "../../assets/img3.webp";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/img5.webp";
import Img6 from "../../assets/img6.webp";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1">
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img1} alt="home1" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text1")}</h2>
            <p className="text-[18px]">{t("project.text2")}</p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img2} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text3")}</h2>
            <p className="text-[18px]">{t("project.text4")}</p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img3} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text5")}</h2>
            <p className="text-[18px]">{t("project.text6")}</p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img4} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text7")}</h2>
            <p className="text-[18px]">{t("project.text8")}</p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img5} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text9")}</h2>
            <p className="text-[18px]">{t("project.text10")}</p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group w-full">
        <img className="w-full h-[290px] object-cover" src={Img6} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">{t("project.text11")}</h2>
            <p className="text-[18px]">{t("project.text12")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
