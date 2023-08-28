import { useQuery } from "@/hooks/useQuery";
import { addressService } from "@/services/addressService";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useDashboard = () => {
  const { profile } = useSelector((store) => store.auth);
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
        const _dataTemp = res?.provinces.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataProvince(_dataTemp);
      }
    } catch (error) {
      console.log("🚀error---->", error);
    }
  };

  // Get data District
  const getDataDistrict = async (id) => {
    const res = await addressService.getDistricts(id);
    try {
      if (res?.districts) {
        const _dataTemp = res?.districts.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataDistrict(_dataTemp);
      }
    } catch (error) {
      console.log("🚀error---->", error);
    }
  };

  // Get data Ward
  const getDataWard = async (id) => {
    const res = await addressService.getWards(id);
    try {
      if (res?.wards) {
        const _dataTemp = res?.wards.map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        });
        setDataWard(_dataTemp);
      }
    } catch (error) {
      console.log("🚀error---->", error);
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
  }, []);
  return {
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
  };
};
