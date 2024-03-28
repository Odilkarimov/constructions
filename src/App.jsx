import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container-box">
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
