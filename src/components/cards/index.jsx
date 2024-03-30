import Mainimg1 from "../../assets/mainimg1.jpg";
import Mainimg2 from "../../assets/mainimg2.jpg";
import Mainimg3 from "../../assets/mainimg3.jpg";
import Mainimg4 from "../../assets/mainimg4.jpg";

const Card = () => {
  return (
    <div className="bg-[#f7f7f7] mt-[50px] mb-[100px]">
      <div className="container-box h-full mb-[200px]">
        <h2 className="text-black text-[22px] font-semibold mb-[80px]">
          Barcha yangiliklarimiz
        </h2>
      </div>
      <div className="container-box flex flex-col gap-[30px]">
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
                Qurilish loyihasi menejeri kim?
              </h2>
              <p className="text-black text-[12px]">
                Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir
                nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib
                topshirilgan qurilish ob'ektini muvaffaqiyatli amalga oshirish
                uchun mas'uldir. U rejalashtirish bosqichidan va loyiha
                hujjatlarini tasdiqlashdan tortib, ishga tushirishgacha bo'lgan
                butun jarayonni boshqaradi. binoning, va ba'zan ham loyihadan
                keyingi yordamni amalga oshiradi. Eng so'nggi
              </p>
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
                Barchani kelayotgan 2024 yil bilan tabriklayman!
              </h2>
              <p className="text-black text-[12px]">
                Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin ham
                qulaylik muhitini yaratadi va qulay navigatsiya tizimi sizga
                kerakli qavatga osongina chiqishga yoki hududga chiqishga yordam
                beradi.
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-xl:flex-col gap-[40px]">
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
              <h2 className="text-black text-[18px] font-semibold">Manzil</h2>
              <p className="text-black text-[12px]">
                Transport infratuzilmasi shaharning istalgan nuqtasiga osongina
                ko'chib o'tishga imkon beradi: siz faqat kerakli va kerakli
                yo'nalishni tanlashingiz kerak.
              </p>
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
                Biz sizni Discover Invest ko'p funksiyali ob'ektlari bilan
                tanishtirishda davom etamiz.
              </h2>
              <p className="text-black text-[12px]">
                Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p
                funksiyali ob'ektlari bilan tanishtirishda davom etamiz. Ulardan
                biri Toshkent shahrining Yangixoyat tumanida barpo etilgan
                'Yangi Choshtepa turar-joy majmuasidir. Qurilishning umumiy
                maydoni 12 gektarni tashkil etadi. Shu kungacha 29 ta uy-joy
                qurildi. qurilgan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
