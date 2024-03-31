import Himg1 from "../../assets/himg1.jpg";
import Himg2 from "../../assets/himg2.jpg";
import Himg3 from "../../assets/himg3.jpg";
import Himg4 from "../../assets/himg4.jpg";
import Himg5 from "../../assets/himg5.jpg";
import Himg6 from "../../assets/himg6.jpg";
import Himg7 from "../../assets/himg7.jpg";
import Himg8 from "../../assets/himg8.jpg";
const Partner = () => {
  return (
    <div>
      <div className="mt-[25px] mb-[25px]">
        <h2 className="text-black text-center font-semibold text-[25px]">
          Hamkorlar bilan birga ishlash
        </h2>
      </div>
      <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        <img src={Himg1} alt="" />
        <img src={Himg2} alt="" />
        <img src={Himg3} alt="" />
        <img src={Himg4} alt="" />
        <img src={Himg5} alt="" />
        <img src={Himg6} alt="" />
        <img src={Himg7} alt="" />
        <img src={Himg8} alt="" />
      </div>
      <div className="bg_main2 bg-cover mt-[30px] h-[600px] py-[50px]">
        <div className="container-box flex flex-col items-start justify-center gap-[70px] mt-[200px] px-[50px]">
          <h2 className="text-[40px] max-md:text-[25px]">
            ATAEV BAHODIR BUILD
          </h2>
          <p className="max-w-[350px] text-[16px]">
            Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar yaratamiz.
            Davlat miqyosidagi inshootlarni qurish orqali biz kelajakni
            quryapmiz. Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va
            infratuzilmani qurish va ulardan foydalanish bilan bog'liq ekologik
            jihatlar uchun to'liq javobgarlikni o'z zimmasiga oladi.
          </p>
          <button className="border border-white rounded-2xl px-[15px] py-[3px] hover:text-black hover:bg-white">
            <h2 className="text-[18px] font-semibold">batafsil bilish</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
