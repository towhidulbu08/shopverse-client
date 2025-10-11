import { Route, Routes } from "react-router-dom";
import Adminlayout from "./components/admin-view/layout";
import Authlayout from "./components/auth/layout";
import UserLayout from "./components/user-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import NotFound from "./pages/not-found/notFound";
import UserAccount from "./pages/user-view/account";
import UserCheckout from "./pages/user-view/checkout";
import UserHome from "./pages/user-view/home";
import UserListing from "./pages/user-view/listing";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<Authlayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          <Route path="/admin" element={<Adminlayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route path="/user" element={<UserLayout />}> 
            <Route path="home" element={<UserHome />} />
            <Route path="listing" element={<UserListing />} />
            <Route path="checkout" element={<UserCheckout />} />

            <Route path="account" element={<UserAccount  />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
