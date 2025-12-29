import { Route, Routes } from "react-router-dom";
import Categorymenu from "./Pages/Category/Categorymenu";
import Mobilepage from "./Pages/Mobilepage/Mobilepage";

import Bookspage from "./Pages/Bookspage/Bookspage";
import Computerpage from "./Pages/Computerpage/Computerpage";
import Fridgepage from "./Pages/Fridgepage/Fridgepage";
import Furniturepage from "./Pages/Furniturepage/Furniturepage";
import Kitchenpage from "./Pages/Kitchenpage/Kitchenpage";
import Menpage from "./Pages/Menpage/Menpage";
import Speakerpage from "./Pages/Speakerpage/Speakerpage";
import Tvpage from "./Pages/Tvpage/Tvpage";
import Watchpage from "./Pages/Watchpage/Watchpage";
import Categorygrid from "./Components/Category/Categorygrid";
import Landpage from "./Pages/Landpage/Landpage";
import Cartpage from "./Pages/Cartpage/Cartpage";
import Orderpage from "./Pages/Orderpage/Orderpage";
import Registrationpage from "./Pages/Registration/Registrationpage";
import Acpage from "./Pages/Acpage/Acpage";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import Loginpage from "./Pages/Login/Loginpage";




function App() {
  return (
      <>
          <Routes>
        <Route path="/" element={<Landpage/>} />
         <Route path="/checkoutpage" element={<CheckoutPage/>} />
            <Route path="/acpage" element={<Acpage/>} />
        <Route path="/mobiles" element={<Mobilepage/>} />
        <Route path="/bookspage" element={<Bookspage/>} />
        <Route path="/computerpage" element={<Computerpage/>} />
        <Route path="/fridgepage" element={<Fridgepage/>} />
        <Route path="/furniturepage" element={<Furniturepage/>} />
        <Route path="/kitchenepage" element={<Kitchenpage/>} />
        <Route path="/kitchenepage" element={<Kitchenpage/>} />
        <Route path="/menpage" element={<Menpage/>} />
        <Route path="/speakerpage" element={<Speakerpage/>} />
        <Route path="/tvpage" element={<Tvpage/>} />
         <Route path="/watchpage" element={<Watchpage/>} />
        <Route path="/categorymenu" element={<Categorymenu/>} />
        <Route path="/Cart" element={<Cartpage/>} />
        <Route path="/Order" element={<Orderpage/>} />
        <Route path="/reistrationpage" element={<Registrationpage/>} />
        <Route path="/productgrid" element={<ProductGrid />} />
        <Route path="/product/:category/:id" element={<ProductDetails />} />
        <Route path="/Loginpage" element={<Loginpage/>} />
      </Routes>
      </>
  );
}

export default App;
