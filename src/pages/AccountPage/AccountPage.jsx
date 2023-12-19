import React, { useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import { message, Select } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addressService } from "@/services/addressService";
import dayjs from "dayjs";
import { authService } from "@/services/authenService";
import { profileUser } from "@/store/middleware/authMiddleware";
const AccountPage = () => {
  const { profile } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      email: profile?.email,
      firstName: profile?.firstName,
      phone: profile?.phone,
      street: profile?.street,
      province: profile?.province,
      district: profile?.district,
      ward: profile?.ward,
      birthday: profile?.birthday
        ? dayjs(profile?.birthday).format("YYYY/MM/DD").replaceAll("/", "-")
        : "",
    },
  });
  const newPassword = watch("newPassword" || "");
  const [dataProvince, setDataProvince] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);
  const [valueProvince, setValueProvince] = useState("");
  const [valueDistrict, setValueDistrcit] = useState("");
  const [valueWard, setValueWard] = useState("");
  const getDataProvince = async () => {
    const res = await addressService.getProvinces();
    try {
      if (res?.provinces) {
        const province = res?.provinces.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataProvince(province);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDataDistrict = async (id) => {
    const res = await addressService.getDistricts(id);
    try {
      if (res?.districts) {
        const district = res?.districts.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataDistrict(district);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataWard = async (id) => {
    const res = await addressService.getWards(id);
    try {
      if (res?.wards) {
        const ward = res?.wards.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataWard(ward);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeProvince = (idProvince) => {
    getDataDistrict(idProvince);
    setValueProvince(idProvince);
    setValueWard();
    setValueDistrcit();
  };
  const handleChangeDistrict = (idDistrict) => {
    getDataWard(idDistrict);
    setValueDistrcit(idDistrict);
    setValueWard();
  };
  const handleChangeWard = (idWard) => {
    setValueWard(idWard);
  };
  const handleAccount = async (data) => {
    console.log(data);
    try {
      const res = await authService.updateProfile({
        ...data,
        lastName: profile?.lastName,
      });
      if (res?.id) {
        dispatch(profileUser());
        message.success("Update success");
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong");
      //error BE API response
    }
  };
  useEffect(() => {
    if (profile?.province) {
      getDataProvince();
      getDataDistrict(profile?.province);
      getDataWard(profile?.district);
      setValueProvince(profile?.province);
      setValueDistrcit(profile?.district);
      setValueWard(profile.ward);
      return;
    }
    getDataProvince();
  }, [profile?.province]);

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
              disabled
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
              type="date"
              label="Ngày sinh"
              name="birthday"
              control={control}
              required
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
                    style={{
                      padding: 0,
                    }}
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
                    className={`form-control customize ${
                      invalid ? "input-error" : ""
                    }`}
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
                    disabled={dataDistrict.length <= 0}
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
                    className={`form-control customize ${
                      invalid ? "input-error" : ""
                    }`}
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
                    disabled={dataWard.length <= 0}
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
                    className={`form-control customize ${
                      invalid ? "input-error" : ""
                    }`}
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
          name="street"
          control={control}
          required
        />
        <Input
          type="password"
          label="Password"
          name="password"
          control={control}
        />
        <Input
          type="password"
          label="New password (leave blank to leave unchanged)"
          name="newPassword"
          control={control}
        />
        <Input
          type="password"
          label="Confirm new password"
          name="confirmPassword"
          control={control}
          rules={{
            validate: (value) =>
              value === newPassword || "Password do not match",
          }}
        />
        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
