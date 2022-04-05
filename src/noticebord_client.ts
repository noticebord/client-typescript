import { AuthenticateRequest } from "./requests";
import { TokenService } from "./services/token_service";

export class NoticebordClient {
    static readonly defaultBaseUrl = "https://noticebord.space/api";

    /**
     *
     */
    constructor(readonly token: string = "", readonly baseUrl: string = NoticebordClient.defaultBaseUrl) { }

    static async getToken(request: AuthenticateRequest, baseUrl: string = NoticebordClient.defaultBaseUrl): Promise<string> {
        return await TokenService.getToken(baseUrl, request);
    }
}