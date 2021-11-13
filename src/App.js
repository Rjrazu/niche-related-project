import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Feedback from './Pages/Home/Feedback/Feedback';
import Login from './Pages/Login/Login/Login';
import Contact from './Pages/Shared/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Booking from './Pages/Shared/Booking/Booking';
import Register from './Pages/Login/Register/Register';
import Admin from './Pages/Shared/Admin/Admin';
import AllProducts from './Pages/Shared/AllProducts/AllProducts';
import MyOrders from './Pages/Shared/MyOrders/MyOrders';
import Payment from './Pages/Shared/Payment/Payment';
import Dashboard from './Pages/Login/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddAdmin from './Pages/Shared/AddAdmin/AddAdmin';
import AllOrders from './Pages/Shared/AllOrders/AllOrders';
import AddReview from './Pages/Shared/AddReview/AddReview';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <AdminRoute exact path="/admin">
              <Admin></Admin>
            </AdminRoute>
            <AdminRoute exact path="/addadmin">
              <AddAdmin></AddAdmin>
            </AdminRoute>
            <Route exact path="/products">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute exact path="/paynow">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/my_orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/all_orders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <Route exact path="/feedback">
              <Feedback></Feedback>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
