import { NestedTopic, User } from ".";

export interface Notice {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    author?: User;
    topics: NestedTopic[];
}