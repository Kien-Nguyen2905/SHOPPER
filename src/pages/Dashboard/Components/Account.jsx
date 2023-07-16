import React from "react";
import Input from "@/components/Input/Input";
import { DatePicker } from "antd";
import { useForm } from "react-hook-form";

const Account = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const handleAccount = (values) => {
    console.log(values);
  };
  return (
    <div
      className="tab-pane fade show active"
      id="tab-account"
      role="tabpanel"
      aria-labelledby="tab-account-link"
    >
      <form onSubmit={handleSubmit(handleAccount)} className="account-form">
        <div className="row">
          <div className="col-sm-6">
            <Input label="Full Name" name="name" control={control} required />
          </div>
          <div className="col-sm-6">
            <Input
              label="Email address"
              name="email"
              control={control}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              label="Phone number"
              name="phone"
              control={control}
              required
            />
          </div>
          <div className="col-sm-6">
            <Input
              name="date"
              control={control}
              required
              type="date"
              renderProp={(props, invalid, field) => (
                <>
                  <label>Ngày sinh *</label>
                  <DatePicker
                    placeholder="dd/MM/yyyy"
                    format="DD/MM/YYYY"
                    className={`form-control ${invalid ? "input-error" : ""}`}
                    {...field}
                    {...props}
                  />
                </>
              )}
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-4">
            <label>Province/City *</label>
            <div className="select-custom">
              <select
                className="form-control form-select"
                id="city"
                aria-label="Default select example"
              >
                <option selected />
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label>District/Town *</label>
            <div className="select-custom">
              <select className="form-control form-select" id="district">
                <option selected />
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label>Ward *</label>
            <div className="select-custom">
              <select className="form-control form-select" id="ward">
                <option selected />
              </select>
            </div>
          </div>
        </div>
        <label>Street address *</label>
        <input
          type="email"
          className="form-control"
          defaultValue="30 Ba Thang Hai St."
          required
        />
        <label>Current password (leave blank to leave unchanged)</label>
        <input type="password" className="form-control" />
        <label>New password (leave blank to leave unchanged)</label>
        <input type="password" className="form-control" />
        <label>Confirm new password</label>
        <input type="password" className="form-control mb-2" /> */}
        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default Account;
