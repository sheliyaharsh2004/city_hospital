import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import Departments from "./container/Departments/Departments";
import Doctor from "./container/Doctors/Doctor";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Login from "./container/Login/Login";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import BookAppointment from "./container/Appointment/BookAppointment";
import ListAppointment from "./container/Appointment/ListAppointment";
import { Provider } from "react-redux";
import { counterStore } from "./Redux/Store";
import Counter from "./container/Counter/Counter";

function App() {

  let store = counterStore()

  return (
    <>
    <Provider store={store}>
        <Header />
        <Switch>
          <PublicRoute exact path={"/"} component={Home} />
          <PublicRoute exact path={"/departments"} component={Departments} />
          <PublicRoute exact path={"/doctors"} component={Doctor} />
          <PublicRoute exact path={"/about"} component={About} />
          <PublicRoute exact path={"/contact"} component={Contact} />
          <PrivateRoute restricted={true} exact path={"/bookappointment"} component={BookAppointment} />
          <PrivateRoute restricted={true} exact path={"/listappointment"} component={ListAppointment} />
          <PublicRoute  exact path={"/login"} component={Login} />
          <PublicRoute exact path={"/counter"} component={Counter} />  
        </Switch>
        <Footer />
    </Provider>
    </> 
  );
}

export default App;
