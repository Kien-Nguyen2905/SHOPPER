import { useEffect, useState } from "react";
export const useQuery = (promise, dependecies = [], configs) => {
  const { preventInitialCall = false } = configs || {};
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    if (preventInitialCall) return;
    fetchdata();
  }, dependecies);
  const fetchdata = async (query) => {
    try {
      setLoading(true);
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
    refetch: fetchdata,
  };
};
