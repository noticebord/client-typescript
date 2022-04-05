import { ListNotice, Notice, Paginated } from "../models";
import { SaveNoticeRequest } from "../requests";
import { Service } from "./service";

export class NoticeService extends Service {
    constructor(token: string, baseUrl: string) {
        super(token, baseUrl);
    }

    /**
     * Create a new notice
     * 
     * @param {SaveNoticeRequest} request The notice to create.
     */
    async createNotice(request: SaveNoticeRequest): Promise<Notice> {
        const { data } = await this.api.post<Notice>("/notices", request);
        return data;
    }

    /**
     * Fetch a list of all notices.
     */
    async fetchNotices(cursor?: string): Promise<Paginated<ListNotice>> {
        const { data } = await this.api.get<Paginated<ListNotice>>("/notices", {
            params: { cursor },
        });
        return data;
    }

    /**
     * Fetch a single notice by ID
     *
     * @param {Number} id The id of the notice to find.
     */
    async fetchNotice(id: number): Promise<Notice> {
        const { data } = await this.api.get<Notice>(`/notices/${id}`);
        return data;
    }

    /**
     * Update an existing notice
     * 
     * @param {number} id The id of the notice to update.
     * @param {SaveNoticeRequest} request The notice to create.
     */
    async updateNotice(id: number, request: SaveNoticeRequest): Promise<Notice> {
        const { data } = await this.api.put<Notice>(`/notices/${id}`, request);
        return data;
    }

    /**
     * Delete an existing notice
     * 
     * @param {number} id The id of the notice to delete.
     */
    async deleteNotice(id: number): Promise<void> {
        await this.api.delete<Notice>(`/notices/${id}`);
    }
}