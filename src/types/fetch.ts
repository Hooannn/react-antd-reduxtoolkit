import type { AxiosResponse } from 'axios';

export interface IResponseData<T> {
  data: T;
  code: number;
  message: string;
}

export interface IResponse<T> extends AxiosResponse {
  data: IResponseData<T>;
}
