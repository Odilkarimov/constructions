import Card from "./components/cards";
import Count from "./components/count";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Project from "./components/project";

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
      <div className="container-box">
        <Project />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
