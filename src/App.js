import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import Departments from "./container/Departments/Departments";
import Doctor from "./container/Doctors/Doctor";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/departments"} component={Departments} />
        <Route exact path={"/Doctors"} component={Doctor} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
