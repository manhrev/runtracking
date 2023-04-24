import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GOOGLE_ACCESS_TOKEN = 'googleAccessToken'

export abstract class restAbstractClient {
  protected client: AxiosInstance;

  constructor(baseUrl: string, defaultHeaders?: Record<string, string>) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: defaultHeaders,
    });

    this.client.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem(GOOGLE_ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  protected async get<T>(url: string, queryParams?: Record<string, any>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  protected async post<T>(url: string, body: any, queryParams?: Record<string, any>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.post(url, body, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  protected async put<T>(url: string, body: any, queryParams?: Record<string, any>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.put(url, body, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  protected async delete<T>(url: string, queryParams?: Record<string, any>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.delete(url, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  private handleAxiosError(error: any): Error {
    if (error.response) {
      const { status, statusText, data } = error.response;
      const message = data?.message || statusText;
      return new Error(`[${status}] ${message}`);
    } else if (error.request) {
      return new Error('No response received from server');
    } else {
      return new Error(error.message);
    }
  }
}
