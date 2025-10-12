import { Route, Routes } from "react-router-dom";
import Adminlayout from "./components/admin-view/layout";
import Authlayout from "./components/auth/layout";
import CheckAuth from "./components/common/check-auth";
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
import UnauthPage from "./pages/unauth-page/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = {
    name:'Tamim',
    role:"admin"

  };
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Authlayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Adminlayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/user"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <UserLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<UserHome />} />
            <Route path="listing" element={<UserListing />} />
            <Route path="checkout" element={<UserCheckout />} />

            <Route path="account" element={<UserAccount />} />
          </Route>
          <Route path="/unauth-page" element={<UnauthPage/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
