import { Service } from ".";
import { Notice, Paginated } from "../models";
import { SaveTeamNoticeRequest } from "../requests";

export class TeamNoticeService extends Service {
    constructor(token: string, baseUrl: string) {
        super(token, baseUrl);
    }

    /**
     * Create a new notice
     * 
     * @param {Number} team The team ID
     * @param {SaveTeamNoticeRequest} request The notice to create.
     */
    async createTeam(team: number, request: SaveTeamNoticeRequest): Promise<Notice> {
        const { data } = await this.api.post<Notice>(`/teams/${team}/notices`, request);
        return data;
    }

    /**
     * Fetch a list of all notices.
     * 
     * @param {Number} team The team ID
     */
    async fetchTeamNotices(team: number, cursor?: string): Promise<Paginated<Notice>> {
        const { data } = await this.api.get<Paginated<Notice>>(`/teams/${team}/notices`, {
            params: { cursor },
        });
        return data;
    }

    /**
     * Fetch a single notice by ID
     *
     * @param {Number} team The team ID
     * @param {Number} id The id of the notice to find.
     */
    async fetchTeamNotice(team: number, id: number): Promise<Notice> {
        const { data } = await this.api.get<Notice>(`/teams/${team}/notices/${id}`);
        return data;
    }

    /**
     * Update an existing notice
     * 
     * @param {Number} team The team ID
     * @param {number} id The id of the notice to update.
     * @param {SaveTeamNoticeRequest} request The notice to create.
     */
    async updateTeamNotice(team: number, id: number, request: SaveTeamNoticeRequest): Promise<Notice> {
        const { data } = await this.api.put<Notice>(`/teams/${team}/notices/${id}`, request);
        return data;
    }

    /**
     * Delete an existing notice
     * 
     * @param {Number} team The team ID
     * @param {number} id The id of the notice to delete.
     */
    async deleteTeamNotice(team: number, id: number): Promise<void> {
        await this.api.delete(`/teams/${team}/notices/${id}`);
    }
}