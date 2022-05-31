import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { api } from './api';

interface IResult {
  short_link: string;
}

interface IURLShort {
  result: IResult;
}

@Injectable()
class UrlShorted {
  async execute(url: string): Promise<string> {
    const removeHttpsFromUrl = url.replace(/^https?:\/\//, '');

    const shortUrl = api.post<IURLShort>(`${removeHttpsFromUrl}`);
    const shortedUrl = (await shortUrl).data.result.short_link;

    return shortedUrl;
  }
}

export { UrlShorted };
