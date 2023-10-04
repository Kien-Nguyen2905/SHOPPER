import { cn } from "@/constants/cn";
import { AUTHEN_TYPE } from "@/constants/general";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
const Register = ({ activeTab, onRegister }) => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      agree: false,
    },
  });
  const handleRegister = (value) => {
    onRegister?.(value);
  };
  return (
    <div
      className={cn("tab-pane fade", {
        "show active": activeTab === AUTHEN_TYPE.register,
      })}
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="form-group">
          <Input
            control={control}
            label="Your email address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <Input
            control={control}
            type="password"
            label="Password"
            name="password"
            required
          />
        </div>
        <div className="form-footer">
          <Button className="btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right" />
          </Button>
          <div className="custom-control custom-checkbox">
            <Checkbox control={control} name="agree" label="I agree to the ">
              <a href="privacy-policy.html">privacy policy</a>
              <span> *</span>
            </Checkbox>
          </div>
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
            <a href="#" className="btn btn-login  btn-f">
              <i className="icon-facebook-f" />
              Login With Facebook
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Register;
