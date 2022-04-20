import { useAxios } from "./use-axios.hook";

export const useHttp = (baseURL, headers) => {
  const instance = useAxios(baseURL, headers);

  const get = async (url, config) => {
    const response = await instance.get(url, config);
    return response;
  };

  const post = async (url, data, config) => {
    const response = await instance.post(url, data, config);
    return response;
  };

  const put = async (url, data, config) => {
    const response = await instance.put(url, data, config);
    return response;
  };

  const del = async (url, config) => {
    const response = await instance.delete(url, config);
    return response;
  };

  return {
    get,
    post,
    put,
    del,
  };
};
