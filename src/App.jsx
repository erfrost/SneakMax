import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import AboutUs from "./components/AboutUs/AboutUs";
import Survey from "./components/Survey/Survey";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";
import Contacts from "./components/Contacts/Contacts";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Catalog />
      <AboutUs />
      <Survey />
      <Team />
      <FAQ />
      <Contacts />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
