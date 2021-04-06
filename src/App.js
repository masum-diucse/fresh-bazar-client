import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Header from './component/Header/Header';
import Admin from './component/Admin/Admin';
import AddProduct from './component/AddProduct/AddProduct';
import ManageProduct from './component/ManageProduct/ManageProduct';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Checkout from './component/Checkout/Checkout';

export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Container>
        <Router >
          <Header></Header>
          <Switch>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </UserContext.Provider>
  );
}


export default App;
