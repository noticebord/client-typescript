import axios from "axios";
import { AuthenticateRequest } from "../requests";

export class TokenService {
    /**
     * Gets a bearer token from the API.
     * 
     * @param baseUrl Base URL of the API
     * @param request The request to authenticate with.
     * @returns A bearer token.
     */
    static async getToken(baseUrl: string, request: AuthenticateRequest): Promise<string> {
        const { data } = await axios.post<string>(`${baseUrl}/tokens`, request, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        return data;
    }
}