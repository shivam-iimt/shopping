import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/home";
import Footer from "./components/footer";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import UserLogin from "./screens/UserLogin";
import UserRegister from "./screens/userRegister";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from './screens/OrderScreen.jsx'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container
            className=""
            style={{ minHeight: "100vh", width: "100vw" }}
          >
            <Route exact path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/signin" component={UserLogin} />
            <Route path="/register" component={UserRegister} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
