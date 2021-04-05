import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
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

const App=()=> {
  return (
   <Container>
      <Router >
      <Header></Header>
      <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
   </Container>
  );
}


export default App;
