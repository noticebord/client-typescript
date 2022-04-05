import { AuthenticateRequest } from "./requests";
import { NoticeService, TeamNoticeService, TeamService, TopicService, UserService } from "./services";
import { TokenService } from "./services/token_service";

export class NoticebordClient {
    static readonly defaultBaseUrl = "https://noticebord.space/api";

    /**
     * @constructor
     * @param {string} token Bearer token
     * @param {string} baseUrl Base URL of the API
     * 
     * @example
     * const client = new NoticebordClient("token", "https://noticebord.space/api");
     * client.fetchNotice(1).then(notice => {
     *   console.log(notice);
     * });
     * 
     * client.fetchNotices().then(notices => {
     *  console.table(notices);
     * });
     */
    constructor(readonly token: string = "", readonly baseUrl: string = NoticebordClient.defaultBaseUrl) { }

    /**
     * Gets a bearer token from the API.
     * 
     * @param {AuthenticateRequest} request The request to authenticate with.
     * @param {string} baseUrl Base URL of the API
     * 
     * @example
     * const token = await NoticebordClient.getToken({
     *  email: "",
     *  password: "",
     *  deviceName: ""
     * });
     * 
     * const client = new NoticebordClient(token);
     * 
     * client.users.fetchCurrentUser().then(user => {
     *  console.log(user);
     * });
     */
    static async getToken(request: AuthenticateRequest, baseUrl: string = NoticebordClient.defaultBaseUrl): Promise<string> {
        return await TokenService.getToken(baseUrl, request);
    }

    get notices(): NoticeService {
        return new NoticeService(this.token, this.baseUrl);
    }
    
    get teams(): TeamService {
        return new TeamService(this.token, this.baseUrl);
    }

    get teamNotices(): TeamNoticeService {
        return new TeamNoticeService(this.token, this.baseUrl);
    }

    get topics(): TopicService {
        return new TopicService(this.token, this.baseUrl);
    }

    get users(): UserService {
        return new UserService(this.token, this.baseUrl);
    }
}