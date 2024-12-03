import { BrowserRouter,Routes,Route } from "react-router-dom"
import RegisterPage from "./Pages/RegisterPage"
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import CheckoutPage from "./Pages/CheckoutPage"
import AddadressPage from "./Pages/AddadressPage"
import PaymentPage from "./Pages/PaymentPage"
import PaymentSuccess from "./Pages/PaymentSuccess"
import ProfilePage from "./Pages/ProfilePage"

export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<LoginPage/>}/>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/checkout" element={<CheckoutPage/>}/>
  <Route path="/toaddress" element={<AddadressPage/>}/>
  <Route path="/payment" element={<PaymentPage/>}/>
  <Route path="/paysuccess" element={<PaymentSuccess/>}/>
  <Route path="/checkout/:id?" element={<CheckoutPage/>}/>
  <Route path="/profile" element={<ProfilePage/>}/>
</Routes>
</BrowserRouter>
  )
}
