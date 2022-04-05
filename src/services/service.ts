import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

export abstract class Service {
    protected api: AxiosInstance;

    constructor(protected readonly token: string, protected readonly baseUrl: string) {
        this.api = axios.create({
            baseURL: baseUrl,
            withCredentials: true,
            headers: {
                Accept: "application/json",
                'Bearer-Token': `Bearer ${token}`,
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            }
        });

        // Axios middleware to convert all api responses to camelCase
        this.api.interceptors.response.use((response: AxiosResponse) => {
            if (response.data && response.headers['content-type'] === 'application/json') {
                response.data = camelizeKeys(response.data);
            }
            return response;
        });

        // Axios middleware to convert all api requests to snake_case
        this.api.interceptors.request.use((config: AxiosRequestConfig) => {
            const newConfig = { ...config };
            newConfig.url = `api/${config.url}`;
            if (newConfig.headers!['Content-Type'] === 'multipart/form-data')
                return newConfig;
            if (config.params) {
                newConfig.params = decamelizeKeys(config.params);
            }
            if (config.data) {
                newConfig.data = decamelizeKeys(config.data);
            }
            return newConfig;
        });
    }
}