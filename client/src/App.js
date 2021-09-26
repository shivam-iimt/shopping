import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/home";
import Footer from "./components/footer";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import UserLogin from "./screens/UserLogin";
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
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/signin" component={UserLogin} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
