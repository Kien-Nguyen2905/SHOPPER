import Input from "@/components/Input/Input";
import { addressService } from "@/services/addressService";
import { Select } from "antd";
import React, { useEffect, useState } from "react";

const BillingDetail = ({ form, profile }) => {
  const [dataProvince, setDataProvince] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);

  const [valueProvince, setValueProvince] = useState("");

  const [valueDistrict, setValueDistrcit] = useState("");

  const [valueWard, setValueWard] = useState("");
  const {
    formState: { errors },
    control,
  } = form || {};
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

  // Get data District
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

  // Get data Ward
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
    <div className="col-lg-9">
      <h2 className="checkout-title">Billing Details</h2>
      <div className="row">
        <div className="col-sm-4">
          <Input
            label="Full Name"
            name="firstName"
            control={control}
            required
          />
        </div>
        <div className="col-sm-4">
          <Input label="Phone number" name="phone" control={control} required />
        </div>
        <div className="col-sm-4">
          <Input
            label="Email address"
            name="email"
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
                  placeholder="Vui lòng chọn tỉnh / thành phố"
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
                  placeholder="Vui lòng chọn quận / huyện"
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
                <label>Ward *</label>
                <Select
                  placeholder="Vui lòng chọn phường xã"
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
      <Input label="Street address" name="street" control={control} required />
      <Input
        className="sr-only"
        name="message"
        control={control}
        renderProp={(props, invalid, field) => (
          <>
            <label>Order notes (optional)</label>
            <textarea
              className={`form-control ${invalid ? "input-error" : ""}`}
              cols={30}
              rows={4}
              {...props}
              {...field}
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </>
        )}
      />
    </div>
  );
};

export default BillingDetail;
