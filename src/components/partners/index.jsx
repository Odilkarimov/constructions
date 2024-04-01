import axios from "axios";
import Himg1 from "../../assets/himg1.jpg";
import Himg2 from "../../assets/himg2.jpg";
import Himg3 from "../../assets/himg3.jpg";
import Himg4 from "../../assets/himg4.jpg";
import Himg5 from "../../assets/himg5.jpg";
import Himg6 from "../../assets/himg6.jpg";
import Himg7 from "../../assets/himg7.jpg";
import Himg8 from "../../assets/himg8.jpg";

const Partner = () => {
  const token = "6985896624:AAHe1qZaRDPih-QpWSSrwi8ZDbBEH_QcYgQ";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const id = -1002069227579;

  const OnFinish = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const tel = document.getElementById("tel").value;
    const message = `Ismi: ${name} Tel: ${number} Xabari: ${tel}`;
    console.log(name);
    axios({
      method: "POST",
      url: url,
      data: {
        text: message,
        chat_id: id,
      },
    }).catch((err) => {
      ("Error");
    });
  };
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
        <div className="container-box flex flex-col items-start max-lg:items-center justify-center gap-[70px] mt-[200px] px-[50px]">
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
      <div
        id="aloqa"
        className="bg-[#202733] h-[920px] flex items-center justify-center"
      >
        <div className="max-w-[1000px] w-full max-h-[600px] h-full bg-white bg_img bg-cover rounded-3xl px-[40px] py-[60px] max-md:py-[30px]">
          <div>
            <h2 className="text-[40px] font-semibold max-md:text-[30px]">
              Savol, taklif va <br /> murojaatlar bormi?
            </h2>
          </div>
          <div>
            <form
              action=""
              className="flex flex-col gap-[30px] mt-[50px]"
              onSubmit={OnFinish}
            >
              <input
                className="max-w-[480px] h-[45px] rounded-xl text-black px-[10px] py-[15px]"
                type="text"
                placeholder="Ismingiz"
                id="name"
              />
              <input
                className="max-w-[480px] h-[45px] rounded-xl text-black px-[10px] py-[15px]"
                type="number"
                placeholder="Telefon raqamingiz"
                id="number"
              />
              <textarea
                className="max-w-[480px] h-[100px] rounded-xl resize-none border-none outline-none text-black px-[10px] py-[10px]"
                name="tel"
                id="tel"
                placeholder="Sizning xabaringiz..."
              ></textarea>
              <button className="max-w-[210px] ml-[130px] max-md:ml-0 border border-white rounded-3xl h-[45px] bg-white/20 hover:bg-white/0">
                <h2 className="text-[18px] font-semibold">Yuborish</h2>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
