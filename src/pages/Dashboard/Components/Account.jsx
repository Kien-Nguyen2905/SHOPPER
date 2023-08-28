import React from "react";
import Input from "@/components/Input/Input";
import { DatePicker, Select } from "antd";
import { useForm } from "react-hook-form";
import { useDashboard } from "../useDashboard";

const Account = () => {
  const {
    profile,
    dataProvince,
    dataDistrict,
    dataWard,
    valueProvince,
    valueDistrict,
    valueWard,
    handleChangeProvince,
    handleChangeDistrict,
    handleChangeWard,
  } = useDashboard();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: profile?.email,
      firstName: profile?.firstName || "",
      phone: profile?.phone,
      street: profile?.street,
      province: profile?.province,
      district: profile?.district,
      ward: profile?.ward,
      birthday: profile?.birthday
        ? dayjs(profile?.birthday || "01-01-2000")
            .format("YYYY/MM/DD")
            .replaceAll("/", "-")
        : "",
    },
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
            <Input
              label="Full Name"
              name="firstName"
              control={control}
              required
            />
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
        <div className="row">
          <div className="col-sm-4">
            <Input
              name="province"
              control={control}
              required
              renderProp={(props, invalid, field) => (
                <>
                  <label>Province/City *</label>
                  <Select
                    style={{ padding: 0 }}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    value={valueProvince || null}
                    options={dataProvince}
                    className={`form-control ${invalid ? "input-error" : ""}`}
                    onChange={(value) => {
                      field.onChange(value);
                      handleChangeProvince(value);
                    }}
                  />
                </>
              )}
            />
          </div>
          <div className="col-sm-4">
            <Input
              name="district"
              control={control}
              required
              renderProp={(props, invalid, field) => (
                <>
                  <label>District/Town *</label>
                  <Select
                    style={{ padding: 0 }}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    value={valueDistrict || null}
                    options={dataDistrict}
                    className={`form-control ${invalid ? "input-error" : ""}`}
                    onChange={(value) => {
                      field.onChange(value);
                      handleChangeDistrict(value);
                    }}
                  />
                </>
              )}
            />
          </div>
          <div className="col-sm-4">
            <Input
              name="ward"
              control={control}
              required
              renderProp={(props, invalid, field) => (
                <>
                  <label>District/Town *</label>
                  <Select
                    style={{ padding: 0 }}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    value={valueWard || null}
                    options={dataWard}
                    className={`form-control ${invalid ? "input-error" : ""}`}
                    onChange={(value) => {
                      field.onChange(value);
                      handleChangeWard(value);
                    }}
                  />
                </>
              )}
            />
          </div>
        </div>
        <Input
          label="Street address"
          name="address"
          control={control}
          required
        />
        <Input
          label="Current password (leave blank to leave unchanged)"
          name="password"
          control={control}
          required
        />
        <Input
          label="New password (leave blank to leave unchanged)"
          name="password"
          control={control}
          required
        />
        <Input
          label="Confirm new password"
          name="password"
          control={control}
          required
        />
        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default Account;
