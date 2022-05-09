import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { Api } from '../services/api';

export default function useFetch(method: number, url: string) {
  const [axiosResponse, setAxiosResponse] = useState<AxiosResponse>();
  const ApiMethods = [Api.get, Api.post, Api.put, Api.patch, Api.delete];

  async function handleFetch() {
    const response = await ApiMethods[method](`${url}`);

    setAxiosResponse(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return { axiosResponse };
}
