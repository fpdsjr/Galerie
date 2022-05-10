import { useEffect, useState } from 'react';

import { Api } from '../services/api';

const ApiRequest = {
  post: Api.post,
  get: Api.get,
  delete: Api.delete,
  patch: Api.patch,
  put: Api.put,
};

type methodName = 'post' | 'get' | 'delete' | 'patch' | 'put';

export default function useFetch<T = unknown>(method: methodName, url: string) {
  const [axiosResponse, setAxiosResponse] = useState<T | null>(null);

  async function handleFetch() {
    const response = await ApiRequest[method](url);

    setAxiosResponse(response.data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return { axiosResponse };
}
