import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, AxiosInstanse = defaultAxios) => {
  const [state, setstate] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refecth = () => {
    setstate({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    AxiosInstanse(options)
      .then((data) => {
        setstate({
          ...state,
          data,
          loading: false,
        });
      })
      .catch((error) => {
        setstate({
          ...state,
          error,
          loading: false,
        });
      });
  }, [trigger]);
  return { ...state, refecth };
};

export default useAxios;
