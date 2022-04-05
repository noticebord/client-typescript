import { AuthenticateRequest } from "../requests";

export class TokenService {
    static async getToken(baseUrl: string, request: AuthenticateRequest): Promise<string> {
        return "";
    }
}