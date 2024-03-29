import Count from "./components/count";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <div className="text-white">
      <div>
        <Header />
      </div>
      <div className="container-box">
        <Main />
      </div>
      <div>
        <Count />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
