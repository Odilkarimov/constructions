import Icon from "../../assets/icon.png";
const Header = () => {
  return (
    <div className="bg_construction bg-cover w-full h-[600px] maxw-[1300px]">
      <div>
        <ul className="flex items-center justify-center gap-[50px]">
          <li className="text-white">
            <a href="">Ma'lumotlar</a>
          </li>
          <li className="text-white">
            <a href="">Biz haqimizda</a>
          </li>
          <li className="text-white">
            <a href="">Korxonalar</a>
          </li>
          <li>
            <div className="text-white">
              <img src={Icon} width={70} alt="" />
              <h2>Odil Karimov</h2>
            </div>
          </li>
          <li className="text-white">
            <a href="">Afzalliklarimiz</a>
          </li>
          <li className="text-white">
            <a href="">Yangiliklar</a>
          </li>
          <li className="text-white">
            <a href="">Aloqa</a>
          </li>
        </ul>
      </div>
      <div className="container-box">
        <h2 className="text-[85px] font-bold">
          ODIL <br /> KARIMOV BUILD
        </h2>
        <p className="text-[18px] font-semibold">
          Biz qilgan ishlarning hammasi alo
        </p>
        <div className="flex gap-[20px]">
          <button className="border-[2px] border-black rounded-2xl w-[134px] h-[44px] font-semibold hover:bg-[#435482] hover:text-white">
            <h2>Bizning loyihalarimiz</h2>
          </button>
          <button className="border-[2px] border-black rounded-2xl w-[134px] h-[44px] font-semibold hover:bg-[#435482] hover:text-white">
            Bog'lanish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
