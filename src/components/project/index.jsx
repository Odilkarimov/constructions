import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.webp";
import Img3 from "../../assets/img3.webp";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/img5.webp";
import Img6 from "../../assets/img6.webp";

const Project = () => {
  return (
    <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1">
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img1} alt="home1" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Magic City</h2>
            <p className="text-[18px]">
              Bu keng ko'lamli ijtimoiy ahamiyatga ega loyiha. Toshkentdagi
              madaniy-ko'ngilochar klaster yangi diqqatga sazovor joylardan
              biridir.
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img2} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Gardens Residence</h2>
            <p className="text-[18px]">
              O'zbekiston aholisiga qulaylik yaratish maqsadida yaratilgan ko'p
              funksiyali turar-joy majmuasi.
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img3} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Fonon</h2>
            <p className="text-[18px]">
              Poytaxt markazidagi muhtasham turar-joy massivi.
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img4} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Invento</h2>
            <p className="text-[18px]">
              Fonon - O'zbekistonda 2020 yilda italyan zavodlari negizida
              qurilgan zargarlik buyumlari ishlab chiqarish zavodi. Fonon -
              Markaziy Osiyoda Yevropa va Sharq uslubida qimmatbaho metallardan
              zargarlik buyumlari ishlab chiqaradigan yagona yirik korxona
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img5} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Presidential School</h2>
            <p className="text-[18px]">
              Tashkent City xalqaro biznes markazida joylashgan xalqaro bolalar
              bog'chasi va maktabi.
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-white shadow-md overflow-hidden group max-w-[550px]">
        <img className="w-[550px] h-[290px]" src={Img6} alt="" />
        <div className="absolute left-0 top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 bg-black/30 group-hover:backdrop-blur-0 w-full h-full duration-500">
          <div className="gap-[20px] flex flex-col">
            <h2 className="text-[30px]">Boulevard</h2>
            <p className="text-[18px]">
              Bu xalqaro darajada bilim beradigan ta'lim muassasasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
