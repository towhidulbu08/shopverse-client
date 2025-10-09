import { Route, Routes } from "react-router-dom";
import Adminlayout from "./components/admin-view/layout";
import Authlayout from "./components/auth/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* common component */}
        <h1>Header Component</h1>

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
        </Routes>
      </div>
    </>
  );
}

export default App;
