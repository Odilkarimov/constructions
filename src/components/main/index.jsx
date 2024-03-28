import Gold from "../../assets/gold1.png";
import Gold2 from "../../assets/gold2.png";
import Gold3 from "../../assets/gold3.png";
import Gold4 from "../../assets/gold4.png";
const Main = () => {
  return (
    <div>
      <div>
        <h2 className="text-[30px] text-center mt-[50px] mb-[50px]">
          Bizning xizmatlar
        </h2>
      </div>
      <div className="flex items-center justify-around flex-col gap-[30px] px]">
        <div className="flex gap-[30px] max-lg:flex-col">
          <div
            className="max-w-[572px] w-full h-[181px] bg-[#2c3442] rounded-lg flex"
            data-aos="fade-right"
          >
            <div className="flex">
              <div className="w-[70%] p-[30px] flex items-center">
                <h2 className="text-[20px] font-semibold">
                  Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz
                  mumkin
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
          <div className="max-lg:max-w-[572px] lg:w-[402px] h-[181px] bg-[#2c3442] rounded-lg flex" data-aos="fade-right">
            <div className="w-[70%] flex items-center p-[30px] ">
              <h2 className="text-[20px] font-semibold">
                Hujjatlarni rasmiylashtirish
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
          <div className="max-lg:max-w-[572px] lg:w-[402px] h-[181px] bg-[#2c3442] rounded-lg flex" data-aos="fade-right">
            <div className="w-[70%] p-[30px] flex items-center">
              <h2 className="text-[20px] font-semibold">
                Ta`mirlash tuzatish xizmati
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
          <div className="max-w-[572px] w-full h-[181px] bg-[#2c3442] rounded-lg flex" data-aos="fade-right">
            <div className="w-[70%] p-[30px] flex items-center">
              <h2 className="text-[20px] font-semibold">
                TProfessionallar jamoasi
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
