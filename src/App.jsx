import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/products";
import Home from "./pages/home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/Auth/signup";
import SignIn from "./pages/Auth/signin";
import ProductDetail from "./pages/productsdetail";
import Todo from "./pages/todo";
import ThemeContextProvider from "./context/context";
import Imagegalery from "./pages/imagegaleery";
import MaterialUi from "./pages/materialUi";
import Carts from "./pages/carts";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="image" element={<Imagegalery />} />
          <Route path="material" element={<MaterialUi />} />
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/carts" element={<Carts />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
