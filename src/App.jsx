import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/Productcontext';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import OurBlog from './Pages/OurBlog';
import Shop from './Pages/Shop';
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import { AuthProvider } from "./context/AuthContext";


export default function App() {
  return (
      <AuthProvider>
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="about" element={<About/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="ourblog" element={<OurBlog/>}/>
          <Route path="shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
     </AuthProvider>
  );
}
