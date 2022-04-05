import { Topic, Paginated, Notice } from "../models";
import { Service } from ".";

export class TopicService extends Service {
    constructor(token: string, baseUrl: string) {
        super(token, baseUrl);
    }

    /**
     * Fetch a list of all topics.
     */
    async fetchTopicsAsync(): Promise<Topic[]> {
        const { data } = await this.api.get<Topic[]>("/topics");
        return data;
    }

    /**
     * Fetch a single topic.
     * 
     * @param {Number} topic The topic ID.
     */
    async fetchTopicAsync(topic: number): Promise<Topic> {
        const { data } = await this.api.get<Topic>(`/topics/${topic}`);
        return data;
    }

    /**
     * Fetch a list of all topic notices.
     * 
     * @param {Number} topic The topic ID.
     */
    async fetchTopicNoticesAsync(topic: number, cursor?: string): Promise<Paginated<Notice[]>> {
        const { data } = await this.api.get<Paginated<Notice[]>>(`/topics/${topic}/notices`, {
            params: { cursor },
        });
        return data;
    }
}