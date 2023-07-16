import { useEffect, useState } from "react";
export const useQuery = (promise, dependecies = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fecthdata();
  }, dependecies);
  const fecthdata = async (query) => {
    try {
      const res = await promise(query);
      setData(res || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    refecth: fecthdata,
  };
};
