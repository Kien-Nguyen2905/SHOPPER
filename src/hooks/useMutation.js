import { useState } from "react";
export const useMutation = (promise, { onSuccess, onFail }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const execute = async (...payload) => {
    try {
      setLoading(true);
      const res = await promise(...payload);
      setData(res || []);
      onSuccess(res);
    } catch (error) {
      setError(error);
      onFail(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    execute,
    data,
    loading,
    error,
  };
};
