import axios, { AxiosInstance } from "axios";

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
    }
}