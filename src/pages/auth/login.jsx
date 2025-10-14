import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onsubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message, {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        });
      } else {
        toast.error(data?.payload?.message || "Registration failed", {
          style: {
            background: "red",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        });
      }
    });
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium text-primary ml-2 hover:underline"
            to={"/auth/register"}
          >
            Sign Up
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onsubmit}
      />
    </div>
  );
};

export default AuthLogin;
