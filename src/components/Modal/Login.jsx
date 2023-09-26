import { cn } from "@/constants/cn";
import { AUTHEN_TYPE } from "@/constants/general";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";

const Login = ({ activeTab, onLogin }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      remember: localStorage.getItem("remember") || false,
    },
  });
  const handleLogin = (values) => {
    onLogin?.(values);
  };
  return (
    <div
      className={cn("tab-pane fade", {
        "show active": activeTab === AUTHEN_TYPE.login,
      })}
      id="signin"
      role="tabpanel"
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-group">
          <Input
            control={control}
            label="Username or email address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <Input
            control={control}
            label="Password"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="form-footer">
          <Button className="btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right" />
          </Button>
          <div className="custom-control custom-checkbox">
            <Checkbox
              control={control}
              name="remember"
              label="Remember Me "
            ></Checkbox>
          </div>
          {/* <a href="#" className="forgot-link">
            Forgot Your Password?
          </a> */}
        </div>
      </form>
      {/* <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google" />
              Login With Google
            </a>
          </div>

          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-f">
              <i className="icon-facebook-f" />
              Login With Facebook
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
