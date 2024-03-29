import Home1 from "../../assets/home1.jpg";
import Home2 from "../../assets/home2.jpg";
import Home3 from "../../assets/home3.jpg";
import Home4 from "../../assets/home4.jpg";
import Home5 from "../../assets/home5.jpg";
import Home6 from "../../assets/home6.jpg";

import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";

const Count = () => {
  const [counter, setCounter] = useState(false);

  return (
    <div>
      <div className="bg_main_bg bg-cover w-full h-[450px] mt-[100px] px-[10px]">
        <h2 data-aos="flip-up" className="text-[30px] font-semibold">
          Bizning kompaniya
        </h2>
        <div>
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="flex items-center justify-center gap-[50px] mt-[100px] flex-wrap">
              <div className="flex items-start justify-start gap-[40px] ml-[-35px]">
                <div>
                  <h2 className="text-[40px] font-bold">
                    +
                    {counter && (
                      <CountUp start={0} end={140} duration={2.75}></CountUp>
                    )}
                  </h2>
                  <p className="text-[21px]">Xodimlar soni</p>
                </div>
                <div className="">
                  <h2 className="text-[40px] font-bold">
                    +
                    {counter && (
                      <CountUp start={0} end={64} duration={2.75}></CountUp>
                    )}
                  </h2>
                  <p className="text-[21px]">Ob'ektlar</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px]">
                <div>
                  <h2 className="text-[40px] font-bold">
                    +
                    {counter && (
                      <CountUp start={0} end={260} duration={2.75}></CountUp>
                    )}
                  </h2>
                  <p className="text-[21px]">Maxsus jihozlar</p>
                </div>
                <div>
                  <h2 className="text-[40px] font-bold">
                    +
                    {counter && (
                      <CountUp start={0} end={4} duration={2.75}></CountUp>
                    )}
                  </h2>
                  <p className="text-[21px]">bozorda 14 yil</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
      <div>
        <h2 className="text-black text-[20px] font-semibold text-center mt-[40px]">
          Sizning orzuyingizdagi uyingiz
        </h2>
        <div className="flex items-center justify-evenly  gap-[20px] flex-wrap mt-[40px]">
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home1}
            alt="home"
          />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home2}
            alt="home"
          />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home3}
            alt="home"
          />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home4}
            alt="home"
          />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home5}
            alt="home"
          />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home6}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
};

export default Count;
