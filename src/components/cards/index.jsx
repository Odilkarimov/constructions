import { useTranslation } from "react-i18next";
import Mainimg1 from "../../assets/mainimg1.jpg";
import Mainimg2 from "../../assets/mainimg2.jpg";
import Mainimg3 from "../../assets/mainimg3.jpg";
import Mainimg4 from "../../assets/mainimg4.jpg";

const Card = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#f7f7f7] mt-[50px]">
      <div id="bizhaqimizda" className="container-box h-full mb-[200px]">
        <h2 className="text-black text-[22px] font-semibold mb-[80px]">
          {t("card.text1")}
        </h2>
      </div>
      <div id="yangiliklar" className="container-box flex flex-col gap-[30px]">
        <div className="flex max-xl:flex-col gap-[40px]">
          <div
            data-aos="zoom-in"
            className="flex items-start justify-center gap-[20px] bg-white shadow-2xl rounded-2xl max-md:flex-col"
          >
            <div className="w-[270px] max-md:w-full">
              <img
                className="w-full object-cover h-[278px] md:rounded-l-2xl"
                src={Mainimg1}
                alt="img"
              />
            </div>
            <div className="w-[330px] max-xl:w-full flex flex-col items-start gap-[20px] py-[20px] px-[10px]">
              <div className="w-[114px] h-[26px] bg-[#363f4e] rounded-xl border cursor-pointer border-black hover:bg-white"></div>
              <h2 className="text-black text-[18px] font-semibold">
                {t("card.text2")}
              </h2>
              <p className="text-black text-[12px]">{t("card.text3")}</p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex items-start justify-center gap-[20px] bg-white shadow-2xl rounded-2xl max-md:flex-col"
          >
            <div className="w-[270px] max-md:w-full">
              <img
                className="w-full object-cover h-[278px] md:rounded-l-2xl"
                src={Mainimg2}
                alt="img"
              />
            </div>
            <div className="w-[330px] max-xl:w-full flex flex-col items-start gap-[20px] py-[20px] px-[10px]">
              <div className="w-[114px] h-[26px] bg-[#363f4e] rounded-xl border cursor-pointer border-black hover:bg-white"></div>
              <h2 className="text-black text-[18px] font-semibold">
                {t("card.text4")}
              </h2>
              <p className="text-black text-[12px]">{t("card.text5")}</p>
            </div>
          </div>
        </div>
        <div className="flex max-xl:flex-col gap-[40px] mb-[100px]">
          <div
            data-aos="zoom-in"
            className="flex items-start justify-center gap-[20px] bg-white shadow-2xl rounded-2xl max-md:flex-col"
          >
            <div className="w-[270px] max-md:w-full">
              <img
                className="w-full object-cover h-[278px] md:rounded-l-2xl"
                src={Mainimg3}
                alt="img"
              />
            </div>
            <div className="w-[330px] max-xl:w-full flex flex-col items-start gap-[20px] py-[20px] px-[10px]">
              <div className="w-[114px] h-[26px] bg-[#363f4e] rounded-xl border cursor-pointer border-black hover:bg-white"></div>
              <h2 className="text-black text-[18px] font-semibold">
                {t("card.text6")}
              </h2>
              <p className="text-black text-[12px]">{t("card.text7")}</p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex items-start justify-center gap-[20px] bg-white shadow-2xl rounded-2xl max-md:flex-col"
          >
            <div className="w-[270px] max-md:w-full">
              <img
                className="w-full object-cover h-[278px] md:rounded-l-2xl"
                src={Mainimg4}
                alt="img"
              />
            </div>
            <div className="w-[330px] max-xl:w-full flex flex-col items-start gap-[20px] py-[20px] px-[10px]">
              <div className="w-[114px] h-[26px] bg-[#363f4e] rounded-xl border cursor-pointer border-black hover:bg-white"></div>
              <h2 className="text-black text-[18px] font-semibold">
                {t("card.text8")}
              </h2>
              <p className="text-black text-[12px]">{t("card.text9")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
