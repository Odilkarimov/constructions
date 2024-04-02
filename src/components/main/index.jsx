import CountUp from "react-countup";
import Gold from "../../assets/gold1.png";
import Gold2 from "../../assets/gold2.png";
import Gold3 from "../../assets/gold3.png";
import Gold4 from "../../assets/gold4.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h2 className="text-[30px] text-center mt-[50px] mb-[50px] text-black font-semibold">
          {t("main.text1")}
        </h2>
      </div>
      <div className="flex items-center justify-around flex-col gap-[30px] px]">
        <div id="korhonalar" className="flex gap-[30px] max-lg:flex-col">
          <div
            className="max-w-[572px] w-full h-[181px] bg-[#2c3442] rounded-lg flex"
            data-aos="fade-right"
          >
            <div className="flex">
              <div className="w-[70%] p-[30px] flex items-center">
                <h2 className="text-[20px] font-semibold">
                {t("main.text2")}
                </h2>
              </div>
              <div className="w-[30%] flex items-end">
                <img
                  src={Gold}
                  alt="gold"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div
            className="max-lg:max-w-[572px] lg:w-[402px] h-[181px] bg-[#2c3442] rounded-lg flex"
            data-aos="fade-right"
          >
            <div className="w-[70%] flex items-center p-[30px] ">
              <h2 className="text-[20px] font-semibold">
              {t("main.text3")}
              </h2>
            </div>
            <div className="w-[30%] flex items-end">
              <img
                src={Gold2}
                alt="gold2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] max-lg:flex-col">
          <div
            className="max-lg:max-w-[572px] lg:w-[402px] h-[181px] bg-[#2c3442] rounded-lg flex"
            data-aos="fade-right"
          >
            <div className="w-[70%] p-[30px] flex items-center">
              <h2 className="text-[20px] font-semibold">
              {t("main.text4")}
              </h2>
            </div>
            <div className="w-[30%] flex items-end">
              <img
                src={Gold3}
                alt="gold3"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div
            className="max-w-[572px] w-full h-[181px] bg-[#2c3442] rounded-lg flex"
            data-aos="fade-right"
          >
            <div className="w-[70%] p-[30px] flex items-center">
              <h2 className="text-[20px] font-semibold">
              {t("main.text5")}
              </h2>
            </div>
            <div className="w-[30%] flex items-end">
              <img
                width={600}
                src={Gold4}
                alt="gold4"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
