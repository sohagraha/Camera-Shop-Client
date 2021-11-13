// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/AddService/AddService';
import Allorders from './components/Allorders/Allorders';
import Myorders from './components/Myorders/Myorders';
import Register from '../src/components/Login/Register/Register'
import AddReview from './components/Review/AddReview/AddReview';
import ManageProducts from './components/ManageProduct/ManageProducts/ManageProducts';
import MainDashboard from './components/Dashboard/MainDashboard/MainDashboard';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/dashboard'>
              <MainDashboard></MainDashboard>
            </PrivateRoute>
            <PrivateRoute path='/add-service'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/manage-product'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path='/add-review'>
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path='/all-orders'>
              <Allorders></Allorders>
            </PrivateRoute>
            <PrivateRoute path='/my-orders'>
              <Myorders></Myorders>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
