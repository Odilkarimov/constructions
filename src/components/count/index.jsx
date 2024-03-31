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
      <div className="bg_main_bg bg-cover w-full h-[550px] mt-[100px] px-[10px]">
        <div>
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="">
              <h2 className="text-center text-[30px] font-semibold py-[50px]">
                Bizning kompaniyada
              </h2>
            </div>
            <div className="flex items-center justify-center gap-[50px] mt-[50px] flex-wrap">
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
      <div id="bizningl">
        <h2 className="text-black text-[30px] font-semibold text-center mt-[40px]">
          Sizning orzuyingizdagi uyingiz
        </h2>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-[20px]">
          <img className="w-[555px] h-[350px]" src={Home1} alt="home" />
          <img className="w-[555px] h-[350px]" src={Home2} alt="home" />
          <img className="w-[555px] h-[350px]" src={Home3} alt="home" />
          <img className="w-[555px] h-[350px]" src={Home4} alt="home" />
          <img className="w-[555px] h-[350px]" src={Home5} alt="home" />
          <img
            className="w-[555px] h-[350px] rounded-lg"
            src={Home6}
            alt="home"
          />
        </div>
      </div>
      <div>
        <h2 className="text-black text-center font-semibold text-[30px] mt-[40px] mb-[20px]">
          Biznig loyihalarimiz
        </h2>
      </div>
    </div>
  );
};

export default Count;
